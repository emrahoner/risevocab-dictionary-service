const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')
const data = require('./src/data')
const config = require('./src/config')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: config.port || 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})