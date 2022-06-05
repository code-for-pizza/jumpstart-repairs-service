const { ApolloServer } = require('apollo-server');
const typeDefs  = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers.js');

const PORT = process.env.PORT || 3001;

async function startApolloServer() {
  const server = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true,
    },
    typeDefs,
    resolvers,
  });

  server.listen({port: PORT}).then(({url}) => {
    console.log(
      `🚀 GraphQL-Server is running on ${url}`
    );
  });
}

startApolloServer();