import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { DayInfo } from './components/dayInfo/DayInfo';
import { SetupComponents } from './components/setupComponents/SetupComponents';
import {
  getMoneyFromLocalstorage,
  getPaydayDate,
  removeInfoFromLocalstorage,
} from './utils/localStorage';
import { Loading } from './components/Loading';
import { SettingButton } from './components/SettingButton';
import { DialogModal } from './components/dialog/DialogModal';
import { useToggleDialog } from './components/hooks/useToggleDialog';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: 10,
  },
}));

export const App = () => {
  const classes = useStyles();
  const [isSetup, setIsSetup] = useState(false);
  const [initApp, setInitApp] = useState(false);
  const [open, setOpen] = useToggleDialog();

  const onResetApp = () => {
    removeInfoFromLocalstorage();
    setOpen()
    setIsSetup(true);
  };

  useEffect(() => {
    if (!Boolean(getPaydayDate()) && !Boolean(getMoneyFromLocalstorage())) {
      setIsSetup(true);
    }
    setInitApp(true);
  }, []);

  if (!initApp) {
    return <Loading />;
  }

  return (
    <Paper square className={classes.root}>
      {isSetup ? <SetupComponents setIsSetup={setIsSetup} /> : <DayInfo />}
      <SettingButton setOpen={setOpen} />
      <DialogModal open={open} setOpen={setOpen} onResetApp={onResetApp} isSetup={isSetup}/>
    </Paper>
  );
};
