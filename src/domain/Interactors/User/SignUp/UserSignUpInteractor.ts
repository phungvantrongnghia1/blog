import { PasswordHasher } from "../../../../helpers/HashPassword";
import Knex from "knex";
import { EmailExistsError } from "./EmailExistsError";
import { UserSignUpPayload } from "./UserSignUpPayload";
import { KnexSQL } from "../../../../helpers/KnexQuery";

export class UserSignUpInteractor {
  constructor(private knexSQL: KnexSQL) {}
  async execute(context: UserSignUpPayload) {
      const emailhasExisted = await this.checkEmailExists(context.email);
    if (emailhasExisted) {
      throw new EmailExistsError();
    }
    const hash = await new PasswordHasher(10).hash(context.hashPassword);
    const userRegister = {...context,hashPassword: hash, fullName: context.firstName + context.lastName}
    await this.knexSQL.insertData("User",userRegister);
    const userResponse = await this.knexSQL.seleteData("User",{fields:["*"],filteringConditions:[["email","=",userRegister.email]]})
    return userResponse;
  }
  private checkEmailExists = async (email: string): Promise<boolean> => {
    // const result = await this.knexClient("User")
    //   .where("User.email", email)
    //   .select("id")
    const result = await this.knexSQL.seleteData("User",{fields:["id"],filteringConditions:[["email","=",email]]})
    return result.length !== 0 ? true : false;
  };
}
