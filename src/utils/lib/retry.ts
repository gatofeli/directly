import { ApiError } from "../error/apiError";
import { ApiOperation } from "../error/apiError";

/**
 * Retries an asynchronous **task** using exponential back-off.
 *
 * The first call to `callback()` happens immediately; if it rejects, the method waits `baseDelay × 2^attempt` ms before each subsequent retry (e.g. 200 ms → 400 ms → 800 ms…).
 * When the retry budget is exhausted, it re-throws the *last* error so that callers can handle it upstream.
 *
 * @private
 *
 * @remarks
 * - The callback return must have a type assertion of (e.g. `Promise< __EXPECTED_TYPE__ >`) so that it does not return the official API type (e.g. `Promise< {[key:string]: any} >`).
 * - Implements *exponential back-off* to mitigate “thundering herd” effects and respect server rate limits.
 *
 * @typeParam T -  Result type produced by the asynchronous task *(`callback`)*.
 *
 * @param callback - Zero-argument function that returns `Promise<T>`.
 * @param maxRetries - **(Optional)**
 *                     Maximum number of additional attempts after the initial call.
 *                     (*Defaults to 3*).
 *                     **Must be `≥ 0`**.
 * @param baseDelay - **(Optional)** Initial back-off delay in **milliseconds**.
 *                    (*Defaults to 200 ms*).
 *
 * @returns A promise that **resolves** with the value returned by `callback` or **rejects** with the last error thrown by `callback` once all retries have failed.
 *
 * @throws Re-throws the original error from the final attempt to preserve stack-trace and diagnostic information.
 *
 *
 * @example
 * ```ts
 * const callback = () =>
 *     chrome.storage.local.get([STORAGE_KEYS.PROVIDERS]) as Promise<{ [STORAGE_KEYS.PROVIDERS]: ProviderType[] }>;
 *
 *   const storageProviders = await this.#retry(callback);
 * ```
 *
 */

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
