import { getVehicles, getVehicleById } from '../services/vehicleService';
import { VehicleDTO } from '../models/vehicle';

export const typeDef = `
  extend type Query {
    vehicleStatus(id: String!): VehicleStatus
    vehiclesStatus: [VehicleStatus]
  }
  
  type VehicleStatus {
    bike_id: String
    vehicle_type: String
    is_reserved: Boolean
    is_disabled: Boolean
  }
`;

export const resolver = {
  vehicleStatus: (parent: any, args: { id: VehicleDTO['bike_id'] }) => getVehicleById(args.id),
  vehiclesStatus: getVehicles,
};
