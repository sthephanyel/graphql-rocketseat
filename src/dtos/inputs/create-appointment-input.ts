// serve para definir uma estrutura de dados que sera recebida como parametro

import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {

    @Field()
    custumerId: string;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}