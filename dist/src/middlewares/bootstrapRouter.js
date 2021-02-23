"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapRouter = void 0;
const UserSignUpInteractor_1 = require("../domain/Interactors/User/SignUp/UserSignUpInteractor");
const knex_1 = require("../../knex");
const UserSignInInteractor_1 = require("../domain/Interactors/User/UserSignInInteractor/UserSignInInteractor");
const isAppRequest = (req) => {
    return req !== undefined;
};
const userSignUpInteractor = new UserSignUpInteractor_1.UserSignUpInteractor(knex_1.knexClient);
const userSignInInteractor = new UserSignInInteractor_1.UserSignInInteractor(knex_1.knexClient);
const bootstrapRouter = (app) => {
    app.use((req, res, next) => {
        if (!isAppRequest(req)) {
            return;
        }
        req.interactor = {
            userSignUpInteractor,
            userSignInInteractor
        };
        next();
    });
    return app;
};
exports.bootstrapRouter = bootstrapRouter;
//# sourceMappingURL=bootstrapRouter.js.map