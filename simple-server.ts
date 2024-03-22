// npm init -y
// npm i typescript ts-node-dev -D
// npx tsc --init
// npm i graphql apollo-server

import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'
// schema first - cria o schema primeiro para depois codar

// Under fetching - nao retorna todas as dados que sao necessarios, necessitando de mais chamadas no endpoint
// Over fetching - retorna mais dados que sao necessarios

// Rotas que teram disponiveis da api
const typeDefs = gql`

# tipagem
type User {
    id: String!
    name: String!
}
# Operacoes de leitura
    type Query {
        users: [User!]!
    }
# Operacoes de CRUD
    type Mutation {
        createUser(name: String!):User!
    }
`

interface User {
    id: String
    name: String
}

const users: User[] = [];

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query :{
            users: () =>{
                return users
            }
        },
        Mutation:{
            createUser: (_, args)=>{

                const user = {
                    id: randomUUID(),
                    name: args.name
                }
                users.push(user)
                return user
            }
        }
    }
})

server.listen().then(({url})=>{
    console.log(`HTTP server runner on ${url}`)
})