
const { ApolloServer } = require('apollo-server')
const { loadFiles } = require('graphql-import-files')
const mongoose = require('mongoose');
require('dotenv').config()

const resolvers = require('./resolvers')
const context = require('./auth/context')

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.im8i7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: loadFiles('**/schemas/**/*.{graphql,gql}'),
  resolvers,
  context
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
