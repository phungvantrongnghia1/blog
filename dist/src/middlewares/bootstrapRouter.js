"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapRouter = exports.isAppRequest = void 0;
const UserSignUpInteractor_1 = require("../domain/Interactors/User/SignUp/UserSignUpInteractor");
const knex_1 = require("../../knex");
const UserSignInInteractor_1 = require("../domain/Interactors/User/UserSignInInteractor/UserSignInInteractor");
const KnexQuery_1 = require("../helpers/KnexQuery");
const AppConfigs_1 = require("../pkgs/configs/AppConfigs");
const bootstrapAuth_1 = require("./bootstrapAuth");
const isAppRequest = (req) => {
    return req !== undefined;
};
exports.isAppRequest = isAppRequest;
const knexSQL = new KnexQuery_1.KnexSQL(knex_1.knexClient);
const userSignUpInteractor = new UserSignUpInteractor_1.UserSignUpInteractor(knexSQL);
const userSignInInteractor = new UserSignInInteractor_1.UserSignInInteractor(knexSQL, AppConfigs_1.appConfigs);
const bootstrapRouter = (app) => {
    app.use((req, res, next) => {
        if (!exports.isAppRequest(req)) {
            return;
        }
        req.interactor = {
            userSignUpInteractor,
            userSignInInteractor
        };
        next();
    });
    bootstrapAuth_1.bootstrapAuth(app);
    return app;
};
exports.bootstrapRouter = bootstrapRouter;
//# sourceMappingURL=bootstrapRouter.js.map