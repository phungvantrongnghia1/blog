"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmailAction = void 0;
const UserNotFoundError_1 = require("../UserNotFoundError");
class GetUserByEmailAction {
    constructor(knexClient) {
        this.knexClient = knexClient;
    }
    async execute(email) {
        const result = await this.knexClient.select('*').from("User").where("email", "=", email).first();
        console.log('result :>> ', result);
        if (!result) {
            console.log("vo error");
            throw new UserNotFoundError_1.UserNotFoundError();
        }
        return result;
    }
}
exports.GetUserByEmailAction = GetUserByEmailAction;
//# sourceMappingURL=GetUserByEmailAction.js.map