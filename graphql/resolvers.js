const ppby = {
    name: 'ppby',
    age: 20,
    gender: 'male',
};

const resolvers = {
    Query: {
        name: () => ppby,
    },
};

export default resolvers;
