"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Client = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const ImageNotFoundError_1 = require("./ImageNotFoundError");
class S3Client {
    constructor(appConfigs) {
        this.appConfigs = appConfigs;
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId: this.appConfigs.awsAccessKey,
            secretAccessKey: this.appConfigs.awsSecretKey,
            region: this.appConfigs.awsRegion,
        });
    }
    async getImage(imageKey) {
        try {
            const response = await this.s3.getSignedUrlPromise("getObject", {
                Bucket: this.appConfigs.awsBucket,
                Key: `storage/${imageKey}`,
            });
            if (response === "https://s3.amazonaws.com/")
                throw new Error("Image not found");
            return response;
        }
        catch (error) {
            throw new ImageNotFoundError_1.ImageNotFoundError("");
        }
    }
    async uploadImage(imageName, image) {
        try {
            const response = await this.s3.upload({
                Bucket: this.appConfigs.awsBucket,
                Key: `${imageName}`,
                Body: image
            });
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.S3Client = S3Client;
//# sourceMappingURL=S3Client.js.map