"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignUpInteractor = void 0;
const HashPassword_1 = require("../../../../helpers/HashPassword");
const EmailExistsError_1 = require("./EmailExistsError");
class UserSignUpInteractor {
    constructor(knexSQL) {
        this.knexSQL = knexSQL;
        this.checkEmailExists = async (email) => {
            // const result = await this.knexClient("User")
            //   .where("User.email", email)
            //   .select("id")
            const result = await this.knexSQL.seleteData("User", { fields: ["id"], filteringConditions: [["email", "=", email]] });
            return result.length !== 0 ? true : false;
        };
    }
    async execute(context) {
        const emailhasExisted = await this.checkEmailExists(context.email);
        if (emailhasExisted) {
            throw new EmailExistsError_1.EmailExistsError();
        }
        const hash = await new HashPassword_1.PasswordHasher(10).hash(context.hashPassword);
        const userRegister = { ...context, hashPassword: hash, fullName: context.firstName + context.lastName };
        await this.knexSQL.insertData("User", userRegister);
        const userResponse = await this.knexSQL.seleteData("User", { fields: ["*"], filteringConditions: [["email", "=", userRegister.email]] });
        return userResponse;
    }
}
exports.UserSignUpInteractor = UserSignUpInteractor;
//# sourceMappingURL=UserSignUpInteractor.js.map