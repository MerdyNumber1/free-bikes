import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { useVehicles } from 'hooks/useVehicles';
import { VehicleTableRow } from './VehicleTableRow';

export const VehiclesTable: React.VFC = () => {
  const classes = useStyles();
  const { getVehicles } = useVehicles();

  const { loading, data: vehicles } = getVehicles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      {loading ? (
        <CircularProgress className={classes.tableSpinner} />
      ) : (
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Vehicle ID</TableCell>
              <TableCell>Reserved</TableCell>
              <TableCell>Disabled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles?.vehiclesStatus.map((vehicle) => (
              <VehicleTableRow key={vehicle.bike_id} vehicle={vehicle} />
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 650,
    margin: '50px auto',
    display: 'flex',
    alignItems: 'center',
  },
  tableSpinner: {
    margin: '20px auto',
  },
});
