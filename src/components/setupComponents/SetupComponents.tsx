import { Button } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  saveMoneyToLocalstorage,
  savePayDateToLocalstorage,
} from '../../utils/localStorage';
import { PickerPayloadDate } from './DatePicker';
import { Money } from './Money';

type SetupComponentProps = {
  setIsSetup: (arg: boolean) => void;
};

export const SetupComponents: React.FC<SetupComponentProps> = ({
  setIsSetup,
}) => {
  const [money, setMoney] = React.useState<number>(0);
  const [validateError, setValidateError] = React.useState(false);
  const [payday, setPayday] = React.useState<Date | null>(null);

  const disabledStartButton =
    !Boolean(money) || money < 0 || !Boolean(payday) || validateError;

  const onSurveyStart = () => {
    if (money && payday) {
      savePayDateToLocalstorage(payday);
      saveMoneyToLocalstorage(money);
      setIsSetup(false);
    }
  };

  return (
    <div>
      <PickerPayloadDate
        setPayday={setPayday}
        payday={payday}
        setValidateError={setValidateError}
      />
      <Money setMoney={setMoney} money={money} />
      <Button
        style={{ margin: 'auto', marginTop: 50, display: 'block' }}
        color="primary"
        variant="outlined"
        onClick={onSurveyStart}
        fullWidth
        disabled={disabledStartButton}
      >
        <FormattedMessage
          id="setup.button"
          defaultMessage="Go ahead to survive"
          description="Go ahead to survive"
        />
      </Button>
    </div>
  );
};
