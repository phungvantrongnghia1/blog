import { AuthenticationFailedError } from "./../../../../helpers/AuthenticationFailedError";
import { InteractorContext } from "./../../InteractorContext";
import { KnexSQL } from "./../../../../helpers/KnexQuery";
export class GetCategoryInteractor {
    constructor(private knexClient: KnexSQL){}
    async execute(context: InteractorContext){
        if(!context.user){
            throw new AuthenticationFailedError("token user is required");
        }
        try {
            const result = await this.knexClient.seleteData("Categories",{fields: ["*"], filteringConditions: []});
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}