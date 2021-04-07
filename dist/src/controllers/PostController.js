"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const CreatePostPayload_1 = require("../domain/Interactors/Post/CreatePost/CreatePostPayload");
let PostController = class PostController {
    async getListCategory(req) {
        return req.interactor.getCategoryInteractor.execute(req);
    }
    async createPost(req, photo, payload) {
        return req.interactor.createPostInteractor.execute(req, photo, payload);
    }
};
__decorate([
    routing_controllers_1.Get("/v1/post/category"),
    __param(0, routing_controllers_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getListCategory", null);
__decorate([
    routing_controllers_1.Post("/v1/post/create"),
    __param(0, routing_controllers_1.Req()),
    __param(1, routing_controllers_1.UploadedFile("photo")),
    __param(2, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreatePostPayload_1.CreatePostPayload]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
PostController = __decorate([
    routing_controllers_1.JsonController()
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map