"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapRouter = void 0;
const UserSignInInteractor_1 = require("../domain/User/SignIn/UserSignInInteractor");
function isAppResques(req) {
    return req !== undefined;
}
const bootstrapRouter = (app) => {
    const userSignInInteractor = new UserSignInInteractor_1.UserSignInInteractor();
    app.use((req, res, next) => {
        if (!isAppResques(req)) {
            return;
        }
        req.interactor = {
            userSignInInteractor
        };
        next();
    });
    return app;
};
exports.bootstrapRouter = bootstrapRouter;
//# sourceMappingURL=bootstrap.js.map