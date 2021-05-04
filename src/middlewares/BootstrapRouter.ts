import { S3Client } from "./../pkgs/configs/s3/S3Client";
import { TokenUser } from "../domain/Interactors/InteractorContext";
import { UserSignUpInteractor } from "../domain/Interactors/User/SignUp/UserSignUpInteractor";

import { NextFunction, Request } from "express";
import { knexClient } from "../../knex";
import { UserSignInInteractor } from "../domain/Interactors/User/UserSignInInteractor/UserSignInInteractor";
import { KnexSQL } from "../helpers/KnexQuery";
import { appConfigs } from "../pkgs/configs/AppConfigs";
import { GetCategoryInteractor } from "../domain/Interactors/Post/Category/GetCategoryInteractor";
import { CreatePostInteractor } from "../domain/Interactors/Post/CreatePost/CreatePostInteractor";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
export interface AppRequest extends Request {
  interactor: {
    userSignUpInteractor: UserSignUpInteractor;
    userSignInInteractor: UserSignInInteractor;
    getCategoryInteractor: GetCategoryInteractor;
    createPostInteractor: CreatePostInteractor;
  };
  user: TokenUser;
}
export const isAppRequest = (req: Request | AppRequest): req is AppRequest => {
  return (req as AppRequest) !== undefined;
};
const knexSQL = new KnexSQL(knexClient);
const s3Client = new S3Client(appConfigs);
const userSignUpInteractor = new UserSignUpInteractor(knexSQL);
const userSignInInteractor = new UserSignInInteractor(knexSQL, appConfigs);
const getCategoryInteractor = new GetCategoryInteractor(knexSQL);
const createPostInteractor = new CreatePostInteractor(knexSQL, s3Client);
@Middleware({ type: "before" })
export class BootstrapRouter implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction) {
    if (!isAppRequest(request)) {
      return;
    }
    request.interactor = {
      userSignUpInteractor,
      userSignInInteractor,
      getCategoryInteractor,
      createPostInteractor,
    };
    next();
  }
}
