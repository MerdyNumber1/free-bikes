import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

interface VehicleFormProps {
  onSearchSubmit: (val: string) => any;
  onReset: () => any;
}

export const VehicleForm: React.VFC<VehicleFormProps> = ({ onSearchSubmit, onReset }) => {
  const classes = useStyles();
  const [vehicleId, setVehicleId] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(vehicleId);
  };

  const onClickReset = () => {
    setVehicleId('');
    onReset();
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <TextField
        value={vehicleId}
        onChange={(e) => setVehicleId(e.target.value)}
        id="vehicleId"
        label="Vehicle ID"
      />
      <Button className={classes.button} variant="contained" type="submit">
        Search
      </Button>
      {vehicleId && (
        <IconButton onClick={onClickReset} className={classes.button}>
          <Clear />
        </IconButton>
      )}
    </form>
  );
};

const useStyles = makeStyles({
  container: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: 20,
  },
});
