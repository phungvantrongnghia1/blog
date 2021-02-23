"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailExistsError = void 0;
const routing_controllers_1 = require("routing-controllers");
class EmailExistsError extends routing_controllers_1.HttpError {
    constructor() {
        super(409);
        Object.setPrototypeOf(this, EmailExistsError.prototype);
    }
    toJSON() {
        return {
            id: "",
            type: "EmailExists",
            status: "ERROR",
            option: {}
        };
    }
}
exports.EmailExistsError = EmailExistsError;
//# sourceMappingURL=EmailExistsError.js.map