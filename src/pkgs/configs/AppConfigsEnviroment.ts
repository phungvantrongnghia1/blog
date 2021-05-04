import { AppConfigs } from "./AppConfigs";
import dotenv from "dotenv";
export class AppConfigsEnviroment implements AppConfigs{
    setup(){
        dotenv.config();
    }
    get jwtSecret():string{
        return "blog-secret"
    }
    get jwtExpiresIn(): string{
        return "1h";
    }
    get awsAccessKey(): string {
        return process.env.AWS_ACCESS_KEY ? process.env.AWS_ACCESS_KEY : "";
      }
    
      get awsSecretKey(): string {
        return process.env.AWS_SECRET_KEY ? process.env.AWS_SECRET_KEY : "";
      }
    
      get awsBucket(): string {
        return process.env.AWS_BUCKET ? process.env.AWS_BUCKET : "";
      }
    
      get awsRegion(): string {
        return process.env.AWS_REGION ? process.env.AWS_REGION : "";
      }
    
}