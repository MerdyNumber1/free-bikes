import React, { useState } from 'react';
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
import { VehicleData, VehicleDTO, VehiclesData } from 'services/models';
import { useLazyQuery, useQuery } from '@apollo/client';
import { VEHICLE, VEHICLES } from 'services/queries';
import { VehicleTableRow } from './VehicleTableRow';
import { VehicleForm } from './VehicleForm';

export const VehiclesTable: React.VFC = () => {
  const [vehicles, setVehicles] = useState<VehicleDTO[]>([]);
  const classes = useStyles();

  const { loading, refetch: refetchVehicles } = useQuery<VehiclesData>(VEHICLES, {
    onCompleted: (data) => {
      setVehicles(data.vehiclesStatus);
    },
  });

  const [getVehicleById] = useLazyQuery<VehicleData>(VEHICLE, {
    onCompleted: (data) => {
      if (data.vehicleStatus) {
        setVehicles([data.vehicleStatus]);
      } else {
        setVehicles([]);
      }
    },
  });

  const onVehiclesReset = () => {
    refetchVehicles().then(({ data }) => setVehicles(data.vehiclesStatus));
  };

  const onVehicleSearch = (val: string) => {
    if (val) {
      getVehicleById({ variables: { id: val } });
    } else {
      onVehiclesReset();
    }
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress className={classes.tableSpinner} />
      ) : (
        <>
          <VehicleForm onReset={onVehiclesReset} onSearchSubmit={onVehicleSearch} />
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Vehicle ID</TableCell>
                  <TableCell>Reserved</TableCell>
                  <TableCell>Disabled</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <VehicleTableRow key={vehicle.bike_id} vehicle={vehicle} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    maxWidth: 650,
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tableSpinner: {
    margin: '20px auto',
  },
});
