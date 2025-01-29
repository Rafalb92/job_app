import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @Field()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
