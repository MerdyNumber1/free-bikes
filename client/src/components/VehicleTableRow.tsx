import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { VehicleDTO } from 'services/models';

interface VehicleTableRowProps {
  vehicle: VehicleDTO;
}

export const VehicleTableRow: React.VFC<VehicleTableRowProps> = ({ vehicle }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {vehicle.vehicle_type}
    </TableCell>
    <TableCell>{vehicle.bike_id}</TableCell>
    <TableCell>{vehicle.is_reserved ? '+' : '-'}</TableCell>
    <TableCell>{vehicle.is_disabled ? '+' : '-'}</TableCell>
  </TableRow>
);
