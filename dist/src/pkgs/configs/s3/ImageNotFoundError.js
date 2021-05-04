"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageNotFoundError = void 0;
const routing_controllers_1 = require("routing-controllers");
class ImageNotFoundError extends routing_controllers_1.HttpError {
    constructor(correlationId) {
        super(404);
        this.correlationId = correlationId;
        Object.setPrototypeOf(this, ImageNotFoundError.prototype);
    }
    toJSON() {
        return {
            id: this.correlationId,
            type: "ImageNotFound",
            options: {},
            status: "ERROR",
            debugMessage: "Image not found error",
        };
    }
}
exports.ImageNotFoundError = ImageNotFoundError;
//# sourceMappingURL=ImageNotFoundError.js.map