"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapAuth = void 0;
const BootstrapRouter_1 = require("./BootstrapRouter");
const AuthenticationFailedError_1 = require("../helpers/AuthenticationFailedError");
const jwt_1 = require("../helpers/jwt");
function bootstrapAuth(app) {
    app.use((req, res, next) => {
        try {
            if (!req.headers["authorization"]) {
                next();
                return;
            }
            const verifyToken = jwt_1.verifyAccessToken(req.headers["authorization"], "blog-secret");
            if (BootstrapRouter_1.isAppRequest(req) && verifyToken)
                req.user = verifyToken;
            next();
        }
        catch (error) {
            if (error.message === "invalid token" || (error.name === "TokenExpiredError")) {
                return res
                    .status(401)
                    .send(new AuthenticationFailedError_1.AuthenticationFailedError(error.message));
            }
        }
    });
    return app;
}
exports.bootstrapAuth = bootstrapAuth;
//# sourceMappingURL=bootstrapAuth.js.map