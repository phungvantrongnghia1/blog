"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignInInteractor = void 0;
const HashPassword_1 = require("./../../../../helpers/HashPassword");
const EmailExistsError_1 = require("./EmailExistsError");
class UserSignInInteractor {
    constructor(knexClient) {
        this.knexClient = knexClient;
        this.checkEmailExists = async (email) => {
            const result = await this.knexClient("User")
                .where("User.email", email)
                .select("id");
            return result.length !== 0 ? true : false;
        };
    }
    async execute(context) {
        const emailhasExisted = await this.checkEmailExists(context.email);
        if (emailhasExisted) {
            throw new EmailExistsError_1.EmailExistsError();
        }
        const hash = await HashPassword_1.hashPassword(context.hashPassword);
        const userRegister = { ...context, hashPassword: hash, fullName: context.firstName + context.lastName };
        await this.knexClient.insert(userRegister).into("User");
        const userResponse = await this.knexClient.select('*').from("User").where("User.email", userRegister.email);
        return userResponse;
    }
}
exports.UserSignInInteractor = UserSignInInteractor;
//# sourceMappingURL=UserSignInInteractor.js.map