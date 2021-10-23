import { Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { DayInfo } from './dayInfo/DayInfo';
import { SetupComponents } from './setupComponents/SetupComponents';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
  getMoneyFromLocalstorage,
  getPaydayDate,
  removeInfoFromLocalstorage,
} from './utils/localStorage';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: 10,
    paddingTop: 50,
  },
}));

export const App = () => {
  const classes = useStyles();
  const [isSetup, setIsSetup] = useState(false);
  const [initApp, setInitApp] = useState(false);

  const onResetApp = () => {
    removeInfoFromLocalstorage();
    setIsSetup(true);
  };

  useEffect(() => {
    if (!Boolean(getPaydayDate()) && !Boolean(getMoneyFromLocalstorage())) {
      setIsSetup(true);
    }
    setInitApp(true);
  }, []);

  if (!initApp) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Paper square className={classes.root}>
      {isSetup ? (
        <SetupComponents setIsSetup={setIsSetup} />
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center">
          <DayInfo />
          <Button
            style={{ marginTop: 100 }}
            endIcon={<RestartAltIcon />}
            color="warning"
            variant="outlined"
            onClick={onResetApp}
          >
            Restart app
          </Button>
        </Box>
      )}
    </Paper>
  );
};
