import {IsEmail, IsNotEmpty,} from "class-validator";
export class UserSignInPayload{
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    hashPassword!: string;

    @IsNotEmpty()
    firstName!:string;

    @IsNotEmpty()
    lastName!: string;
}