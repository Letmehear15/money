import { TextField, Typography } from '@mui/material';
import React from 'react';

type MoneyProps = {
  money: number | undefined;
  setMoney: (number: undefined | number) => void;
};

export const Money: React.FC<MoneyProps> = ({ money, setMoney }) => {
  const onMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMoney(Number(value));
  };
  return (
    <>
      <Typography marginBottom={1} marginTop={2}>
        Fill the money input
      </Typography>
      <TextField
        required
        onChange={onMoneyChange}
        value={money ? money : ''}
        type="number"
        label="Money till payday"
        fullWidth
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*'
        }}
      />
    </>
  );
};
