import { getById, people } from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => {
            // 처음 파라미터는 현재 객체를 보냄
            return getById(id);
        },
    },
};

export default resolvers;
