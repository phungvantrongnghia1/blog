"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoNotProvidedError = void 0;
const routing_controllers_1 = require("routing-controllers");
class PhotoNotProvidedError extends routing_controllers_1.HttpError {
    constructor() {
        super(400);
        Object.setPrototypeOf(this, PhotoNotProvidedError);
    }
    toJSON() {
        return {
            type: "PhotoNotProvided",
            options: {},
            status: "ERROR",
            debugMessage: "Photo not provided error",
        };
    }
}
exports.PhotoNotProvidedError = PhotoNotProvidedError;
//# sourceMappingURL=PhotoNotProvidedError.js.map