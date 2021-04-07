import { IsEmpty, MaxLength } from "class-validator";
export class CreatePostPayload {
  @MaxLength(256)
  content!: string;
  @IsEmpty()
  categories!: string;
  @IsEmpty()
  auth!: string;
}
