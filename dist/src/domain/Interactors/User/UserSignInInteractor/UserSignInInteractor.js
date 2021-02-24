"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignInInteractor = void 0;
const UserNotFoundError_1 = require("./UserNotFoundError");
const HashPassword_1 = require("../../../../helpers/HashPassword");
const jwt_1 = require("../../../../helpers/jwt");
class UserSignInInteractor {
    constructor(knexSQL, appConfigs) {
        this.knexSQL = knexSQL;
        this.appConfigs = appConfigs;
    }
    async execute(payload) {
        const userQuery = await this.knexSQL.seleteData("User", { fields: ["*"], filteringConditions: [["email", "=", payload.email]] });
        if (!userQuery || userQuery.length === 0) {
            throw new UserNotFoundError_1.UserNotFoundError();
        }
        const passwordHasher = new HashPassword_1.PasswordHasher(10);
        const verifyUser = await passwordHasher.verify(payload.hashPassword, userQuery[0].hashPassword, "bcrypt");
        if (!verifyUser) {
            throw new UserNotFoundError_1.UserNotFoundError();
        }
        const user = { ...userQuery[0] };
        delete user.hashPassword;
        const { accessToken } = jwt_1.generateAccessToken(user, this.appConfigs.jwtSecret, this.appConfigs.jwtExpiresIn);
        return accessToken;
    }
}
exports.UserSignInInteractor = UserSignInInteractor;
//# sourceMappingURL=UserSignInInteractor.js.map