import Knex from "knex";
import { UserSignInPayload } from "../SignUp/UserSignInPayload";
export class UserSignInInteractor {
    constructor(private knexClient: Knex){
    }
    async execute(payload:UserSignInPayload){
        
    }
}