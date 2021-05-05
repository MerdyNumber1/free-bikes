import fetch from 'node-fetch';
import { VehicleDTO } from '../models/vehicle';

export const getVehicles = async (): Promise<VehicleDTO[]> => {
  const response = await fetch(<string>process.env.API_URL);
  return (await response.json()).data.bikes;
};

export const getVehicleById = async (vehicleId: string): Promise<VehicleDTO | undefined> => {
  const vehicles = await getVehicles();
  return vehicles.find((vehicle) => vehicle.bike_id === vehicleId);
};
