import "reflect-metadata";
import {knexClient}  from "../../knex";

import { Get,JsonController} from "routing-controllers";
@JsonController()
export class UserController {
    @Get("/")
    async getList(){
       const result = await knexClient.select("*").from("User");
       console.log('result :>> ', result);
        return "list is get"
    }
}