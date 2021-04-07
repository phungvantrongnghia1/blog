"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTooLargeError = void 0;
const routing_controllers_1 = require("routing-controllers");
class FileTooLargeError extends routing_controllers_1.HttpError {
    constructor() {
        super(400);
        Object.setPrototypeOf(this, FileTooLargeError.prototype);
    }
    toJSON() {
        return {
            type: "FileTooLarge",
            options: {},
            status: "ERROR",
            debugMessage: "File too large error",
        };
    }
}
exports.FileTooLargeError = FileTooLargeError;
//# sourceMappingURL=FileTooLargeError.js.map