"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryInteractor = void 0;
const AuthenticationFailedError_1 = require("./../../../../helpers/AuthenticationFailedError");
class GetCategoryInteractor {
    constructor(knexClient) {
        this.knexClient = knexClient;
    }
    async execute(context) {
        if (!context.user) {
            throw new AuthenticationFailedError_1.AuthenticationFailedError("token user is required");
        }
        try {
            const result = await this.knexClient.seleteData("Categories", { fields: ["*"], filteringConditions: [] });
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetCategoryInteractor = GetCategoryInteractor;
//# sourceMappingURL=GetCategoryInteractor.js.map