"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateAccessToken(tokenUser, jwtSecret, expiresIn) {
    const token = jsonwebtoken_1.default.sign(tokenUser, jwtSecret, {
        header: {
            authorization: true
        },
        expiresIn
    });
    return { accessToken: token };
}
exports.generateAccessToken = generateAccessToken;
function verifyAccessToken(tokenUser, jwtSecret) {
    const token = jsonwebtoken_1.default.verify(tokenUser, jwtSecret);
    return token;
}
exports.verifyAccessToken = verifyAccessToken;
//# sourceMappingURL=jwt.js.map