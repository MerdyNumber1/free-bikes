import { useQuery } from '@apollo/client';
import { VEHICLES } from 'services/queries';
import { VehiclesData } from 'services/models';

export const useVehicles = () => ({
  getVehicles: () => useQuery<VehiclesData>(VEHICLES),
});
