import { HttpError } from "routing-controllers";

export class PhotoNotProvidedError extends HttpError {
  constructor() {
    super(400);
    Object.setPrototypeOf(this, PhotoNotProvidedError);
  }
  toJSON(): any {
    return {
      type: "PhotoNotProvided",
      options: {},
      status: "ERROR",
      debugMessage: "Photo not provided error",
    };
  }
}
