export interface LilyApiErrorDetails {
  field?: string;
  reason?: string;
}

export interface LilyApiErrorOptions {
  status: number;
  code: string;
  message: string;
  details?: unknown;
}

type LilyApiErrorConstructorArgs =
  | [message: string, status: number, code: string, details?: unknown]
  | [options: LilyApiErrorOptions];

export class LilyApiError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly details: unknown;

  constructor(...args: LilyApiErrorConstructorArgs) {
    const options = normalizeLilyApiErrorArgs(args);

    super(options.message);

    this.name = "LilyApiError";
    this.status = options.status;
    this.code = options.code;
    this.details = options.details;
  }
}

function normalizeLilyApiErrorArgs(
  args: LilyApiErrorConstructorArgs,
): LilyApiErrorOptions {
  if (typeof args[0] === "object" && args[0] !== null && "message" in args[0]) {
    return args[0];
  }

  const [message, status, code, details] = args;
  return { message: message ?? "", status: status ?? 0, code: code ?? "", details };
}

export function isLilyApiError(error: unknown): error is LilyApiError {
  return (
    error instanceof LilyApiError ||
    (typeof error === "object" &&
      error !== null &&
      (error as { name?: unknown }).name === "LilyApiError")
  );
}

export async function handleApiResponse(response: Response): Promise<void> {
  if (response.ok) return;

  let code = "UNKNOWN_ERROR";
  let message = response.statusText || "An unexpected error occurred";
  let details: unknown;

  try {
    const body = await response.json();
    if (typeof body === "object" && body !== null) {
      if (typeof body.code === "string") code = body.code;
      if (typeof body.message === "string") message = body.message;
      if ("details" in body) details = body.details;
    }
  } catch {
    // Non-JSON error response; use defaults from status text
  }

  throw new LilyApiError(message, response.status, code, details);
}
