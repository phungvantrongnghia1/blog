import "reflect-metadata";
import {Get, JsonController, Post, Req} from "routing-controllers";

import { AppRequest } from "../middlewares/BootstrapRouter";
@JsonController()
export class PostController{
    @Get("/v1/post/category")
    async getListCategory(@Req() req: AppRequest){
        return req.interactor.getCategoryInteractor.execute(req);
    }
    @Post("/v1/post/create")
    async createPost(@Req() req: AppRequest){
        return req.interactor.createPostInteractor.execute(req, req.body);
    }
}