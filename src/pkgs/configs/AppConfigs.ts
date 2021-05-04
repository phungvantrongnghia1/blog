import { AppConfigsEnviroment } from "./AppConfigsEnviroment";

export interface AppConfigs {

  readonly jwtSecret: string;

  readonly jwtExpiresIn: string;

  readonly awsAccessKey: string;
  readonly awsSecretKey: string;
  readonly awsRegion: string;
  readonly awsBucket: string;
}

export const appConfigs: AppConfigs = new AppConfigsEnviroment();