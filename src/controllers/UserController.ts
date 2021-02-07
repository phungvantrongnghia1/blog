import "reflect-metadata";

import { Get,JsonController} from "routing-controllers";
@JsonController()
export class UserController {
    @Get("/")
    getList(){
        return "list is get"
    }
}