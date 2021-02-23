import { UserSignUpInteractor } from "../domain/Interactors/User/SignUp/UserSignUpInteractor";

import {Application, request, Request} from "express";
import {knexClient}  from "../../knex";
import { UserSignInInteractor } from "../domain/Interactors/User/UserSignInInteractor/UserSignInInteractor";

export interface AppRequest extends Request {
    interactor: {
        userSignUpInteractor: UserSignUpInteractor
        userSignInInteractor: UserSignInInteractor
    }
}
const isAppRequest = (req: Request | AppRequest): req is AppRequest => {
    return (req as AppRequest) !== undefined;
}
const userSignUpInteractor = new UserSignUpInteractor(knexClient);
const userSignInInteractor = new UserSignInInteractor(knexClient);

export const bootstrapRouter = (app: Application): Application  => {
    app.use((req,res,next) => {
        if(!isAppRequest(req)){
            return ;
        }
        req.interactor = {
            userSignUpInteractor,
            userSignInInteractor
        }
        next();
    })
    return app;
}