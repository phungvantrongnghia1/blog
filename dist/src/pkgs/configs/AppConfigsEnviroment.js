"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigsEnviroment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
class AppConfigsEnviroment {
    setup() {
        dotenv_1.default.config();
    }
    get jwtSecret() {
        return "blog-secret";
    }
    get jwtExpiresIn() {
        return "1h";
    }
}
exports.AppConfigsEnviroment = AppConfigsEnviroment;
//# sourceMappingURL=AppConfigsEnviroment.js.map