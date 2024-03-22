import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AppointmentModels {
    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}