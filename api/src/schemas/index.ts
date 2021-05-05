import { makeExecutableSchema } from 'apollo-server';
import { typeDef as VehicleStatus, resolver as vehicleResolver } from './vehicle';

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {
  Query: {
    ...vehicleResolver,
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, VehicleStatus],
  resolvers,
});
