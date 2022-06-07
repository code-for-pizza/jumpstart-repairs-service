const resolvers = {
  Query: {
    hello: (_: undefined, { name }: { name: string }) => {
      if (name) {
        return `Hello ${name}`;
      }

      return `Hello Keith`;
    },
    huhu: (_: undefined, { huhu }: { huhu: string }) => {
      return huhu;
    },
  },
};

export default resolvers;
