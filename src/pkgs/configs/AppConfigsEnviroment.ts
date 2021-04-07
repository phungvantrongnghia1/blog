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
}