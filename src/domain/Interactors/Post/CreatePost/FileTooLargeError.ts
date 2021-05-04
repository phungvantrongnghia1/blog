import { HttpError } from "routing-controllers";

export class FileTooLargeError extends HttpError {
  constructor() {
    super(400);
    Object.setPrototypeOf(this, FileTooLargeError.prototype);
  }

  toJSON(): Record<string, string | Record<string, string>> {
    return {
      type: "FileTooLarge",
      options: {},
      status: "ERROR",
      debugMessage: "File too large error",
    };
  }
}
