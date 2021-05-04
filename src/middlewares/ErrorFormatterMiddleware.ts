import { isArray, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";
import {ExpressErrorMiddlewareInterface, HttpError, Middleware} from "routing-controllers";
type BadRequestValidationError = {
    errors: ValidationError[];
  };

export type ErrorResponse = {
    debugMessage: string;
    id: string;
    status: string;
    type: string;
    options?: unknown;
    errors?: ValidationError[];
  };
function isBadRequestValidationError(error: Error | BadRequestValidationError): boolean {
    if(Array.isArray((error as BadRequestValidationError).errors)){
        return true;
    }
    return false;
}
console.log("vo day");

@Middleware({type: "after"})
export class ErrorFormatterMiddleware implements ExpressErrorMiddlewareInterface {
    public async error(error: Error, req: Request, res: Response, next: NextFunction): Promise<void>{
        if(error instanceof HttpError && error.httpCode === 500){
            const status = 500;
        const responseObject: ErrorResponse = {
            debugMessage: error.name,
            id: "",
            status: "ERROR",
            type: "GenericApplicationError",
          };
      
          res.status(status).json(responseObject);
        }
        res.status((error as HttpError).httpCode).json(error);
    }
}