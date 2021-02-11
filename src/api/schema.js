const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type UserInput {
    id: ID
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`

modoule.exports = makeExecutableSchema({ typeDefs, resolvers})
