import {IsEmail, IsNotEmpty} from "class-validator";

export class UserSignInPayload {
    @IsEmail()
    email!: string;
    
    @IsNotEmpty()
    hashPassword!: string
}