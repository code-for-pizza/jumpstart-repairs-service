import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers.js';

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

  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀 GraphQL-Server is running on ${url}`);
  });
}

startApolloServer();
