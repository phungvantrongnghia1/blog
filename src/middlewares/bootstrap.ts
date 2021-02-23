import { Application, Request} from 'express';
import { UserSignInInteractor } from '../domain/User/SignIn/UserSignInInteractor';
export interface  AppRequest  extends Request{
    interactor: {
        userSignInInteractor: UserSignInInteractor
    }
}
function isAppResques(req: Request | AppRequest): req is AppRequest {
    return req as AppRequest !== undefined;
}
export const bootstrapRouter =(app: Application): any => {
    const userSignInInteractor = new UserSignInInteractor();
    app.use((req,res,next) => {
       if(!isAppResques(req)){
            return;
       }
       req.interactor = {
        userSignInInteractor
       };
       next();
    })
    return app;
}