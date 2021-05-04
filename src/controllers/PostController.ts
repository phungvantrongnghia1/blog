import "reflect-metadata";
import {
  Body,
  Get,
  JsonController,
  Post,
  Req,
  UploadedFile,
} from "routing-controllers";
import { CreatePostPayload } from "../domain/Interactors/Post/CreatePost/CreatePostPayload";

import { AppRequest } from "../middlewares/BootstrapRouter";
@JsonController()
export class PostController {
  @Get("/v1/post/category")
  async getListCategory(@Req() req: AppRequest): Promise<any> {
    return req.interactor.getCategoryInteractor.execute(req);
  }
  @Post("/v1/post/create")
  async createPost(
    @Req() req: AppRequest,
    @UploadedFile("photo") photo: Express.Multer.File,
    @Body() payload: CreatePostPayload
  ): Promise<any> {
    return req.interactor.createPostInteractor.execute(req, photo, payload);
  }
}
