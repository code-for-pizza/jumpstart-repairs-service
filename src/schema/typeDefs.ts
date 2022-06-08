import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello(name: String): String
    haha(huhu: String): String!
  }
`;

export default typeDefs;
