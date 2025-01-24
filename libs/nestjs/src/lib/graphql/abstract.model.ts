import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class AbstractModel {
  @Field(() => Number)
  id: number;
}
