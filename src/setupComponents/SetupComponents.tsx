import { Button } from '@mui/material';
import React from 'react';
import {
  saveMoneyToLocalstorage,
  savePayDateToLocalstorage,
} from '../utils/localStorage';
import { PickerPayloadDate } from './DatePicker';
import { Money } from './Money';

type SetupComponentProps = { 
    setIsSetup: (arg: boolean) => void
}

export const SetupComponents: React.FC<SetupComponentProps> = ({setIsSetup}) => {
  const [money, setMoney] = React.useState<number>();
  const [payday, setPayday] = React.useState<Date | null>(null);

  const onSurveyStart = () => {
    if (money && payday) {
      savePayDateToLocalstorage(payday);
      saveMoneyToLocalstorage(money);
      setIsSetup(false)
    }
  };

  return (
    <div>
      <PickerPayloadDate setPayday={setPayday} payday={payday} />
      <Money setMoney={setMoney} money={money} />
      <Button
        style={{ margin: 'auto', marginTop: 50, display: 'block' }}
        color="primary"
        variant="outlined"
        onClick={onSurveyStart}
        fullWidth
      >
        Go ahead to survive
      </Button>
    </div>
  );
};
