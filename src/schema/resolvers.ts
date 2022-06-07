const resolvers = {
  Query: {
    hello: (_: undefined, { name }: { name: string }) => {
      if (name) {
        return `Hello ${name}`;
      }

      return `Hello Keith`;
    },
  },
};

export default resolvers;
