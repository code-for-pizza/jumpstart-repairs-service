import { ApolloServer, gql } from 'apollo-server';
import typeDefs from '../../src/schema/typeDefs';
import resolvers from '../../src/schema/resolvers';

describe('hello resolver', () => {
  const mockServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  it(`returns ${'Hello Keith'} if no name is provided`, async () => {
    // step 1: arrange
    const query = gql`
      query Test {
        hello
      }
    `;

    const expectedResult = {
      hello: 'Hello Keith',
    };

    // step 2: act
    const { data: actualResult } = await mockServer.executeOperation({
      query,
    });

    // step 3: assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`returns Hello ${'name'} if name is provided`, async () => {
    //step 1: arrange
    const query = gql`
      query Test {
        hello(name: "dex")
      }
    `;

    const expectedResult = {
      hello: 'Hello dex',
    };

    // step 2: act
    const { data } = await mockServer.executeOperation({
      query,
    });

    //step 3: assert
    expect(data).toEqual(expectedResult);
  });
});
