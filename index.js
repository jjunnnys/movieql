import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers,
});

server.start(() => console.log('✅ 서버 실행 http://localhost:4000'));
