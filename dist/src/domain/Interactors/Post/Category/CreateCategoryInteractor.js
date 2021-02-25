"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryInteractor = void 0;
const AuthenticationFailedError_1 = require("../../../../helpers/AuthenticationFailedError");
class CreateCategoryInteractor {
    constructor(knexClient) {
        this.knexClient = knexClient;
    }
    async execute(context, payload) {
        if (!context.user) {
            throw new AuthenticationFailedError_1.AuthenticationFailedError("token user is required");
        }
        return "alo";
    }
}
exports.CreateCategoryInteractor = CreateCategoryInteractor;
//# sourceMappingURL=CreateCategoryInteractor.js.map