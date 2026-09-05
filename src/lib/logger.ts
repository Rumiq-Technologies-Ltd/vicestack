type Level = "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

/**
 * Structured logging. Emits one JSON line per event so platform log search
 * works. Never log full form payloads — they contain personal data.
 */
function emit(level: Level, event: string, context: LogContext = {}): void {
  const line = JSON.stringify({
    level,
    event,
    at: new Date().toISOString(),
    ...context,
  });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export const logger = {
  info: (event: string, context?: LogContext) => emit("info", event, context),
  warn: (event: string, context?: LogContext) => emit("warn", event, context),
  error: (event: string, context?: LogContext) => emit("error", event, context),
};

/** Reduces an unknown throwable to something safe to log. */
export function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
