import { Button, TextField, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';

type SpentMoneyPerDayProps = {
  setSpentMoney: (money: number) => void;
  onApplyMoney: () => void;
  spentMoney: number | undefined;
};

export const SpentMoneyPerDay: React.FC<SpentMoneyPerDayProps> = ({
  setSpentMoney,
  spentMoney = 0,
  onApplyMoney,
}) => {
  const onSpentMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSpentMoney(Number(value));
  };
  return (
    <>
      <Typography marginBottom={1} marginTop={5}>
        <FormattedMessage
          id="money.spent"
          description="Enter the amount of money spent"
          defaultMessage="Enter the amount of money spent"
        />
      </Typography>
      <Box display="flex" flexDirection="column">
        <TextField
          label={
            <FormattedMessage
              id="money.spentLabel"
              description="was spent today..."
              defaultMessage="was spent today..."
            />
          }
          type="number"
          onChange={onSpentMoneyChange}
          value={spentMoney ? spentMoney : ''}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: '0',
          }}
        />
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          size="small"
          endIcon={<CheckCircleIcon />}
          onClick={onApplyMoney}
          disabled={!Boolean(spentMoney) || spentMoney < 0}
        >
          <FormattedMessage id="money.spentApply" defaultMessage="Apply" description="Apply"/>
        </Button>
      </Box>
    </>
  );
};
