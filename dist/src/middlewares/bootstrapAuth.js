"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapAuth = void 0;
const bootstrapRouter_1 = require("./bootstrapRouter");
const AuthenticationFailedError_1 = require("../helpers/AuthenticationFailedError");
const jwt_1 = require("../helpers/jwt");
function bootstrapAuth(app) {
    app.use((req, res, next) => {
        try {
            if (!req.headers["authorization"]) {
                throw new Error("Token is require");
            }
            const verifyToken = jwt_1.verifyAccessToken(req.headers["authorization"], "blog-secret");
            if (bootstrapRouter_1.isAppRequest(req))
                req.user = verifyToken;
            next();
        }
        catch (error) {
            if (error.message === "invalid token") {
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