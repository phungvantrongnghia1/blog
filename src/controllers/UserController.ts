import { AppRequest } from "./../middlewares/bootstrapRouter";
import "reflect-metadata";

import { Get, Req,JsonController, Post} from "routing-controllers";
@JsonController()
export class UserController {
    @Post("/v1/users/signup")
    async signUp(@Req() req: AppRequest){
       return req.interactor.userSignUpInteractor.execute(req.body);
    }
    @Post("/v1/users/signin")
    async signIn(@Req() req: AppRequest){
        return req.interactor.userSignInInteractor.execute(req.body);
    }
}