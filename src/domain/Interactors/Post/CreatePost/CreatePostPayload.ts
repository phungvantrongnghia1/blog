import { IsEmpty } from "class-validator";
export class CreatePostPayload {
  content!: string;
  image!: string;
  @IsEmpty()
  categories!: string;
  @IsEmpty()
  auth!: string;
}
