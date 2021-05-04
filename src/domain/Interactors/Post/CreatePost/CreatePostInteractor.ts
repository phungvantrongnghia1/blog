import { S3Client } from "./../../../../pkgs/configs/s3/S3Client";
import { InteractorContext } from "./../../InteractorContext";
import { KnexSQL } from "./../../../../helpers/KnexQuery";
import { CreatePostPayload } from "./CreatePostPayload";
import { AuthenticationFailedError } from "../../../../helpers/AuthenticationFailedError";
import { PhotoNotProvidedError } from "./PhotoNotProvidedError";
import { FileTooLargeError } from "./FileTooLargeError";
export class CreatePostInteractor {
    private fileUploadMaxSize = 4194304; // 4MB
    constructor(private knexClient: KnexSQL, s3Client: S3Client){}
    async execute(context: InteractorContext,photo: Express.Multer.File, payload:CreatePostPayload): Promise<string>{
        if(!context.user){
            throw new AuthenticationFailedError("token user is required");
        }
        if(!photo){
            throw new PhotoNotProvidedError();
        }
        if(photo.size >= this.fileUploadMaxSize){
            throw new FileTooLargeError();
        }
        return "bla";
    }
}
