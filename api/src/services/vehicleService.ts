import fetch from 'node-fetch';
import { VehicleDto } from '../dto/vehicleDto';

export const getVehicles = async (): Promise<VehicleDto[]> => {
  const response = await fetch(<string>process.env.API_URL);
  return (await response.json()).data.bikes;
};

export const getVehicleById = async (vehicleId: string): Promise<VehicleDto | undefined> => {
  const vehicles = await getVehicles();
  return vehicles.find((vehicle) => vehicle.bike_id === vehicleId);
};
