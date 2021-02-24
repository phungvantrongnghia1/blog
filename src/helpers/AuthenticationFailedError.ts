import {HttpError} from "routing-controllers";

export class AuthenticationFailedError extends HttpError {
    constructor(private debugMessage: string){
        super(401);
        Object.setPrototypeOf(this,AuthenticationFailedError.prototype);
    }
    toJSON(){
        return {
            id: "",
            type: "AuthenticationFailded",
            option:{},
            status:"Error",
            debugMessage: this.debugMessage
        }
    }
}