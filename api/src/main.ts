import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { schema } from './schemas';

dotenv.config();

const server = new ApolloServer({ schema });

server.listen(process.env.APP_PORT).then(({ url }) => console.log(`Server ready at ${url}`));
