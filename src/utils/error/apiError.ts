export enum ApiOperation {
  STORAGE_SET = "STORAGE_SET",
  STORAGE_GET = "STORAGE_GET",
}

export class ApiError<T = unknown> extends Error {
  public readonly operation: ApiOperation;
  public fallback?: T;

  constructor(message: string, operation: ApiOperation, fallback?: T, options?: ErrorOptions) {
    super(message, options);
    this.name = "ApiError";
    this.operation = operation;
    this.fallback = fallback;
  }
}
