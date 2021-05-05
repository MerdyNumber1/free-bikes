import { useQuery, QueryFunctionOptions } from '@apollo/client';
import { VEHICLES, VEHICLE } from 'services/queries';
import { VehiclesData, VehicleData } from 'services/models';

export const useVehicles = () => ({
  getVehicles: (onCompleted?: QueryFunctionOptions['onCompleted']) =>
    useQuery<VehiclesData>(VEHICLES, { onCompleted }),
  getVehicleById: (id: string) =>
    useQuery<VehicleData>(VEHICLE, {
      variables: { id },
    }),
});
