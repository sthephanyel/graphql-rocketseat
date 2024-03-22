import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { AppointmentModels } from "../dtos/models/appointment-models";

@Resolver()
export class AppointmentsResolvers {
    @Query(()=>[AppointmentModels])
    async appointments(){
        return [];
    }
    
    @Mutation(()=>AppointmentModels)
    async createAppointment(@Arg('data') data: CreateAppointmentInput){
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt
        }
        return appointment;
    }
}