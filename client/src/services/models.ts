/* eslint-disable camelcase */
export interface VehicleDTO {
  bike_id: string;
  lat: number;
  lon: number;
  vehicle_type: string;
  is_reserved: boolean;
  is_disabled: boolean;
}

export interface VehiclesData {
  vehiclesStatus: VehicleDTO[];
}

export interface VehicleData {
  vehicleStatus: VehicleDTO;
}
