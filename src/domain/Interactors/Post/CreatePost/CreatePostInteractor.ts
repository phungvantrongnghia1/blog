import { InteractorContext } from "./../../InteractorContext";
import { KnexSQL } from "./../../../../helpers/KnexQuery";
import { CreatePostPayload } from "./CreatePostPayload";
import { AuthenticationFailedError } from "../../../../helpers/AuthenticationFailedError";
export class CreatePostInteractor {
    constructor(private knexClient: KnexSQL){}
    async execute(context: InteractorContext, payload:CreatePostPayload){
        if(!context.user){
            throw new AuthenticationFailedError("token user is required");
        }
        return "bla";
    }
}
