import { HttpError } from "routing-controllers";

export class ImageNotFoundError extends HttpError {
  constructor(private correlationId: string) {
    super(404);
    Object.setPrototypeOf(this, ImageNotFoundError.prototype);
  }

  toJSON(): Record<string, string | Record<string, string>> {
    return {
      id: this.correlationId,
      type: "ImageNotFound",
      options: {},
      status: "ERROR",
      debugMessage: "Image not found error",
    };
  }
}
