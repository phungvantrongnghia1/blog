"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationFailedError = void 0;
const routing_controllers_1 = require("routing-controllers");
class AuthenticationFailedError extends routing_controllers_1.HttpError {
    constructor(debugMessage) {
        super(401);
        this.debugMessage = debugMessage;
        Object.setPrototypeOf(this, AuthenticationFailedError.prototype);
    }
    toJSON() {
        return {
            id: "",
            type: "AuthenticationFailded",
            option: {},
            status: "Error",
            debugMessage: this.debugMessage
        };
    }
}
exports.AuthenticationFailedError = AuthenticationFailedError;
//# sourceMappingURL=AuthenticationFailedError.js.map