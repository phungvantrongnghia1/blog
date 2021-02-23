import {HttpError} from "routing-controllers";

export class EmailExistsError extends HttpError{
    constructor(){
        super(409);
        Object.setPrototypeOf(this,EmailExistsError.prototype);
    }
    toJSON(){
        return {
            id: "",
            type:"EmailExists",
            status: "ERROR",
            option: {}
        }
    }
}