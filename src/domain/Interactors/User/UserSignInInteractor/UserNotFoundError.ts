import {HttpError} from "routing-controllers";

export class UserNotFoundError extends HttpError{
    constructor(){
        super(404);
        Object.setPrototypeOf(this,UserNotFoundError.prototype);
    }
    toJSON(){
        return {
            id: "",
            type:"UserNotFound",
            status: "ERROR",
            option: {}
        }
    }
}