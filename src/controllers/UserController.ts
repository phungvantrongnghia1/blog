import { UserSignUpPayload } from "./../domain/Interactors/User/SignUp/UserSignUpPayload";
import { AppRequest } from "../middlewares/BootstrapRouter";
import "reflect-metadata";

import { Get, Req,JsonController, Post, Body} from "routing-controllers";
@JsonController()
export class UserController {
    @Post("/v1/users/signup")
    async signUp(@Req() req: AppRequest, @Body() payload: UserSignUpPayload){
       return req.interactor.userSignUpInteractor.execute(payload);
    }
    @Post("/v1/users/signin")
    async signIn(@Req() req: AppRequest) {
        return req.interactor.userSignInInteractor.execute(req.body);
    }
    @Get("/")
    getSome(){
        return "";
    }
}