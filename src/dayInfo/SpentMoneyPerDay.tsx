import { Button, TextField, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/system';
import React from 'react';

type SpentMoneyPerDayProps = {
  setSpentMoney: (money: number) => void;
  onApplyMoney: () => void;
  spentMoney: number | undefined;
};

export const SpentMoneyPerDay: React.FC<SpentMoneyPerDayProps> = ({
  setSpentMoney,
  spentMoney,
  onApplyMoney
}) => {
  const onSpentMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSpentMoney(Number(value));
  };
  return (
    <>
      <Typography marginBottom={1} marginTop={2}>
        Fill spent money input
      </Typography>
      <Box display="flex" flexDirection="column">
        <TextField
          label="was spent today..."
          type="number"
          onChange={onSpentMoneyChange}
          value={spentMoney ? spentMoney : ''}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*'
          }}
        />
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          size="small"
          endIcon={<CheckCircleIcon />}
          onClick={onApplyMoney}
          disabled={!Boolean(spentMoney)}
        >
          Apply
        </Button>
      </Box>
    </>
  );
};
