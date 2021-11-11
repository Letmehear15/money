import { TextField, Typography } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

type MoneyProps = {
  money: number | undefined;
  setMoney: (number: number) => void;
};

export const Money: React.FC<MoneyProps> = ({ money, setMoney }) => {
  const onMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMoney(Number(value));
  };
  return (
    <>
      <Typography marginBottom={1} marginTop={2}>
        <FormattedMessage
          id="money.available"
          defaultMessage="Enter the amount of money available"
          description="Enter the amount of money available"
        />
      </Typography>
      <TextField
        required
        onChange={onMoneyChange}
        value={money ? money : ''}
        type="number"
        label={
          <FormattedMessage
            id="money.label"
            defaultMessage="Money till payday"
            description="Money till payday"
          />
        }
        fullWidth
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
          min: '0',
        }}
      />
    </>
  );
};
