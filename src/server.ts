import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolvers } from "./resolvers/appointments-revolsers";
import path from 'node:path'
// https://typegraphql.com/docs/installation.html
// Define as Querys e as Mutations de forma automatica
// Code first - Codando, implementando e o schema é criado automaticamente
async function bootstrap(){

    const schema = await buildSchema({
        resolvers: [
            AppointmentsResolvers,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        validate: { forbidUnknownValues: false }
    })

    const server = new ApolloServer({
        schema
    })

    const { url } = await server.listen()

    console.log(`HTTP server runner on ${url}`)
}

bootstrap()