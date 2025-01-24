import { AbstractModel } from '@job-app/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
  @Field()
  name: string;
  @Field()
  password: string;
}
