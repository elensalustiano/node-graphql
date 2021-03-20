
const { ApolloServer } = require('apollo-server')
const { loadFiles } = require('graphql-import-files')

const resolvers = require('./resolvers')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: loadFiles('**/schemas/graphql/**/*.{graphql,gql}'),
  resolvers
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
