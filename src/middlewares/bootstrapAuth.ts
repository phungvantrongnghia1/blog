import { isAppRequest } from "./bootstrapRouter";
import { Application } from "express";
import { AuthenticationFailedError } from "../helpers/AuthenticationFailedError";
import { verifyAccessToken } from "../helpers/jwt";
export function bootstrapAuth(app: Application) {
  app.use((req, res, next) => {
    try {
      if (!req.headers["authorization"]) {
        throw new Error("Token is require");
      }
      const verifyToken = verifyAccessToken(
        req.headers["authorization"],
        "blog-secret"
      );
      if(isAppRequest(req))
      req.user = verifyToken;
      next();
    } catch (error) {
      if (error.message === "invalid token") {
        return res
          .status(401)
          .send(new AuthenticationFailedError(error.message));
      }
    }
  });
  return app;
}
