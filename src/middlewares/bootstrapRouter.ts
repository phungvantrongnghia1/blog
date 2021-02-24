import { UserSignUpInteractor } from "../domain/Interactors/User/SignUp/UserSignUpInteractor";

import {Application, request, Request} from "express";
import {knexClient}  from "../../knex";
import { UserSignInInteractor } from "../domain/Interactors/User/UserSignInInteractor/UserSignInInteractor";
import { KnexSQL } from "../helpers/KnexQuery";
import { appConfigs } from "../pkgs/configs/AppConfigs";
import { bootstrapAuth } from "./bootstrapAuth";

export interface AppRequest extends Request {
    interactor: {
        userSignUpInteractor: UserSignUpInteractor
        userSignInInteractor: UserSignInInteractor
    },
    user?:any
}
export const isAppRequest = (req: Request | AppRequest): req is AppRequest => {
    return (req as AppRequest) !== undefined;
}
const knexSQL = new KnexSQL(knexClient);
const userSignUpInteractor = new UserSignUpInteractor( knexSQL);
const userSignInInteractor = new UserSignInInteractor(knexSQL,appConfigs);

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
    bootstrapAuth(app);
    return app;
}