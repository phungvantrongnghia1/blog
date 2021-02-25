"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFormatterMiddleware = void 0;
const routing_controllers_1 = require("routing-controllers");
function isBadRequestValidationError(error) {
    if (Array.isArray(error.errors)) {
        return true;
    }
    return false;
}
console.log("vo day");
let ErrorFormatterMiddleware = class ErrorFormatterMiddleware {
    async error(error, req, res, next) {
        if (error instanceof routing_controllers_1.HttpError && error.httpCode === 500) {
            const status = 500;
            const responseObject = {
                debugMessage: error.name,
                id: "",
                status: "ERROR",
                type: "GenericApplicationError",
            };
            res.status(status).json(responseObject);
        }
        res.status(error.httpCode).json(error);
    }
};
ErrorFormatterMiddleware = __decorate([
    routing_controllers_1.Middleware({ type: "after" })
], ErrorFormatterMiddleware);
exports.ErrorFormatterMiddleware = ErrorFormatterMiddleware;
//# sourceMappingURL=ErrorFormatterMiddleware.js.map