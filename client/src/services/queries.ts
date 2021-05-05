import { gql } from '@apollo/client';

export const VEHICLES = gql`
  query getVehicles {
    vehiclesStatus {
      bike_id
      vehicle_type
      is_reserved
      is_disabled
    }
  }
`;
