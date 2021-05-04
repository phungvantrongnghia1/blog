/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Response } from "express";
import { UserSignUpPayload } from "./../domain/Interactors/User/SignUp/UserSignUpPayload";
import { AppRequest } from "../middlewares/BootstrapRouter";
import "reflect-metadata";

import { Req, JsonController, Post, Body, Res } from "routing-controllers";
@JsonController()
export class UserController {
  @Post("/v1/users/signup")
  async signUp(@Req() req: AppRequest, @Body() payload: UserSignUpPayload) {
    return req.interactor.userSignUpInteractor.execute(payload);
  }
  @Post("/v1/users/signin")
  async signIn(@Req() req: AppRequest, @Res() response: Response) {
    const token = await req.interactor.userSignInInteractor.execute(req.body);
    response.setHeader("Authorization", token);
    return token;
  }
}
