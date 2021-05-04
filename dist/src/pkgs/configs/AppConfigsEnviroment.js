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
    get awsAccessKey() {
        return process.env.AWS_ACCESS_KEY ? process.env.AWS_ACCESS_KEY : "";
    }
    get awsSecretKey() {
        return process.env.AWS_SECRET_KEY ? process.env.AWS_SECRET_KEY : "";
    }
    get awsBucket() {
        return process.env.AWS_BUCKET ? process.env.AWS_BUCKET : "";
    }
    get awsRegion() {
        return process.env.AWS_REGION ? process.env.AWS_REGION : "";
    }
}
exports.AppConfigsEnviroment = AppConfigsEnviroment;
//# sourceMappingURL=AppConfigsEnviroment.js.map