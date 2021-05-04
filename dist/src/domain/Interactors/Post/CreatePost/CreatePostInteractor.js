"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostInteractor = void 0;
const AuthenticationFailedError_1 = require("../../../../helpers/AuthenticationFailedError");
const PhotoNotProvidedError_1 = require("./PhotoNotProvidedError");
const FileTooLargeError_1 = require("./FileTooLargeError");
class CreatePostInteractor {
    constructor(knexClient, s3Client) {
        this.knexClient = knexClient;
        this.fileUploadMaxSize = 4194304; // 4MB
    }
    async execute(context, photo, payload) {
        if (!context.user) {
            throw new AuthenticationFailedError_1.AuthenticationFailedError("token user is required");
        }
        if (!photo) {
            throw new PhotoNotProvidedError_1.PhotoNotProvidedError();
        }
        if (photo.size >= this.fileUploadMaxSize) {
            throw new FileTooLargeError_1.FileTooLargeError();
        }
        return "bla";
    }
}
exports.CreatePostInteractor = CreatePostInteractor;
//# sourceMappingURL=CreatePostInteractor.js.map