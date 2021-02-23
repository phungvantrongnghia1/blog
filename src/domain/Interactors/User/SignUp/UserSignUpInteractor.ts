import { PasswordHasher } from "../../../../helpers/HashPassword";
import Knex from "knex";
import { EmailExistsError } from "./EmailExistsError";
import { UserSignInPayload } from "./UserSignInPayload";

export class UserSignUpInteractor {
  constructor(private knexClient: Knex) {}
  async execute(context: UserSignInPayload) {
      const emailhasExisted = await this.checkEmailExists(context.email);
    if (emailhasExisted) {
      throw new EmailExistsError();
    }
    const hash = await new PasswordHasher(10).hash(context.hashPassword);
    const userRegister = {...context,hashPassword: hash, fullName: context.firstName + context.lastName}
    await this.knexClient.insert(userRegister).into("User");
    const userResponse = await this.knexClient.select('*').from("User").where("User.email",userRegister.email);
    return userResponse;
  }
  private checkEmailExists = async (email: string): Promise<boolean> => {
    const result = await this.knexClient("User")
      .where("User.email", email)
      .select("id")
    return result.length !== 0 ? true : false;
  };
}
