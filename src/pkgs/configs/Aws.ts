import aws from "aws-sdk";
import {PutObjectRequest} from "aws-sdk/clients/s3";
import dotenv from "dotenv";
const s3 = new aws.S3();
const param:PutObjectRequest = {
    Bucket: process.env.S3_BUCKET || "",
    Key: "123",
}
dotenv.config();
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

s3.putObject(param)
export class S3Service  {
    static uploadFile(key: string,)    
}