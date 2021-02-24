import { AppConfigsEnviroment } from "./AppConfigsEnviroment";

export interface AppConfigs {

  readonly jwtSecret: string;

  readonly jwtExpiresIn: string;
}

export const appConfigs: AppConfigs = new AppConfigsEnviroment();