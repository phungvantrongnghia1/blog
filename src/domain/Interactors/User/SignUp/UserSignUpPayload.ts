import {IsEmail, IsNotEmpty,} from "class-validator";
export class UserSignUpPayload{
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