import "reflect-metadata";
import {JsonController, Post, Req} from "routing-controllers";

import { AppRequest } from "../middlewares/bootstrapRouter";
@JsonController()
export class PostController{
    @Post("/v1/post/category")
    async createCategory(@Req() req: AppRequest){
        console.log("alo");
        return "create category";
    }
}