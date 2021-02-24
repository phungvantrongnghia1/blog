import { UserNotFoundError } from "./UserNotFoundError";
import Knex from "knex";
import { KnexSQL } from "../../../../helpers/KnexQuery";
import { UserSignInPayload } from "./UserSignInPayload";
import { PasswordHasher } from "../../../../helpers/HashPassword";
import { generateAccessToken } from "../../../../helpers/jwt";
import { AppConfigs } from "../../../../pkgs/configs/AppConfigs";
export class UserSignInInteractor {
    constructor(private knexSQL: KnexSQL, private appConfigs: AppConfigs){
    }
    async execute(payload:UserSignInPayload){
        const userQuery = await this.knexSQL.seleteData("User",{fields: ["*"], filteringConditions: [["email","=",payload.email]]});
        if(!userQuery || userQuery.length === 0){
            throw new UserNotFoundError();
        }
        const passwordHasher = new PasswordHasher(10);
       const verifyUser = await passwordHasher.verify(payload.hashPassword,userQuery[0].hashPassword,"bcrypt");
       if(!verifyUser){
        throw new UserNotFoundError();
       }
       const user = {...userQuery[0]};
       delete user.hashPassword;
       const {accessToken} = generateAccessToken(user,this.appConfigs.jwtSecret,this.appConfigs.jwtExpiresIn);
        return accessToken;
    }
}