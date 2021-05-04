import { makeExecutableSchema } from 'apollo-server';
import { typeDef as VehicleStatus } from './vehicle';

const Query = `
  type Query {
    vehicleStatus(id: Int!): VehicleStatus
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [Query, VehicleStatus],
  resolvers: {},
});
