import AWS from "aws-sdk";
import { AppConfigs } from "../AppConfigs";
import { ImageNotFoundError } from "./ImageNotFoundError";
export class S3Client {
  private s3: AWS.S3;

  constructor(private appConfigs: AppConfigs) {
    this.s3 = new AWS.S3({
      accessKeyId: this.appConfigs.awsAccessKey,
      secretAccessKey: this.appConfigs.awsSecretKey,
      region: this.appConfigs.awsRegion,
    });
  }

  public async getImage(
    imageKey: string,
  ): Promise<string> {
    try {
      const response = await this.s3.getSignedUrlPromise("getObject", {
        Bucket: this.appConfigs.awsBucket,
        Key: `storage/${imageKey}`,
      });
      if (response === "https://s3.amazonaws.com/") throw new Error("Image not found");
      return response;
    } catch (error) {
      throw new ImageNotFoundError("");
    }
  }
  public async uploadImage(imageName: string, image: any): Promise<any>{
    try {
      const response = await this.s3.upload({
        Bucket: this.appConfigs.awsBucket,
        Key: `${imageName}`,
        Body: image
      })
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
