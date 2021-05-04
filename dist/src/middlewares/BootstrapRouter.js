"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapRouter = exports.isAppRequest = void 0;
const UserSignUpInteractor_1 = require("../domain/Interactors/User/SignUp/UserSignUpInteractor");
const knex_1 = require("../../knex");
const UserSignInInteractor_1 = require("../domain/Interactors/User/UserSignInInteractor/UserSignInInteractor");
const KnexQuery_1 = require("../helpers/KnexQuery");
const AppConfigs_1 = require("../pkgs/configs/AppConfigs");
const GetCategoryInteractor_1 = require("../domain/Interactors/Post/Category/GetCategoryInteractor");
const CreatePostInteractor_1 = require("../domain/Interactors/Post/CreatePost/CreatePostInteractor");
const routing_controllers_1 = require("routing-controllers");
const isAppRequest = (req) => {
    return req !== undefined;
};
exports.isAppRequest = isAppRequest;
const knexSQL = new KnexQuery_1.KnexSQL(knex_1.knexClient);
const userSignUpInteractor = new UserSignUpInteractor_1.UserSignUpInteractor(knexSQL);
const userSignInInteractor = new UserSignInInteractor_1.UserSignInInteractor(knexSQL, AppConfigs_1.appConfigs);
const getCategoryInteractor = new GetCategoryInteractor_1.GetCategoryInteractor(knexSQL);
const createPostInteractor = new CreatePostInteractor_1.CreatePostInteractor(knexSQL);
let BootstrapRouter = class BootstrapRouter {
    use(request, response, next) {
        if (!exports.isAppRequest(request)) {
            return;
        }
        request.interactor = {
            userSignUpInteractor,
            userSignInInteractor,
            getCategoryInteractor,
            createPostInteractor,
        };
        next();
    }
};
BootstrapRouter = __decorate([
    routing_controllers_1.Middleware({ type: "before" })
], BootstrapRouter);
exports.BootstrapRouter = BootstrapRouter;
//# sourceMappingURL=BootstrapRouter.js.map