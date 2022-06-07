import { ApolloServer, gql } from 'apollo-server';
import typeDefs from '../../src/schema/typeDefs';
import resolvers from '../../src/schema/resolvers';

describe('huhu resolver', () => {
  const mockServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  it('returns huhu value', async () => {
    // arrange
    const query = gql`
      query Test {
        haha(huhu: "hehe")
      }
    `;

    const expectedResult = {
      haha: 'hehe',
    };

    // act
    const { data: actualResult } = await mockServer.executeOperation({ query });

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
