import { AppConfigs } from "./AppConfigs";

export class AppConfigsEnviroment implements AppConfigs{
    get jwtSecret():string{
        return "blog-secret"
    }
    get jwtExpiresIn(): string{
        return "1h";
    }
}