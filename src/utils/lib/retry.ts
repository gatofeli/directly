import { ApiError, ApiOperation } from "../error/apiError";

export async function retry<T = void>(callback: () => Promise<T>, operation: ApiOperation): Promise<T> {
  let lastError: unknown;
  const maxRetries = 3;
  const baseDelay = 200;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await callback();
    } catch (error) {
      lastError = error;
      const backoff = baseDelay * 2 ** attempt;
      const jitter = Math.floor(Math.random() * baseDelay);
      await new Promise<void>((done) => setTimeout(done, backoff + jitter));
    }
  }

  const message = lastError instanceof Error ? lastError.message : MESSAGE_UNKNOWN_ERROR;

  throw new ApiError(message, operation, undefined, { cause: lastError });
}

export const MESSAGE_UNKNOWN_ERROR = "Unknown error - The API rejected a request without returning an Error instance.";
