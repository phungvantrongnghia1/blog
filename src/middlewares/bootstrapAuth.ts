import { isAppRequest } from "./BootstrapRouter";
import { Application } from "express";
import { AuthenticationFailedError } from "../helpers/AuthenticationFailedError";
import { verifyAccessToken } from "../helpers/jwt";
import { TokenUser } from "../domain/Interactors/InteractorContext";
export function bootstrapAuth(app: Application) {
  app.use((req, res, next) => {
    try {
      if (!req.headers["authorization"]) {
        next();
        return;
      }
      const verifyToken = verifyAccessToken(
        req.headers["authorization"],
        "blog-secret"
      );
      if(isAppRequest(req) && verifyToken)
      req.user = verifyToken as TokenUser;
      next();
    } catch (error) {
      if (error.message === "invalid token" || (error.name === "TokenExpiredError")) {
        return res
          .status(401)
          .send(new AuthenticationFailedError(error.message));
      }
      console.log('error :>> ', error);
    }
  });
  return app;
}
