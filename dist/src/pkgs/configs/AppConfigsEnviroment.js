"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigsEnviroment = void 0;
class AppConfigsEnviroment {
    get jwtSecret() {
        return "blog-secret";
    }
    get jwtExpiresIn() {
        return "1h";
    }
}
exports.AppConfigsEnviroment = AppConfigsEnviroment;
//# sourceMappingURL=AppConfigsEnviroment.js.map