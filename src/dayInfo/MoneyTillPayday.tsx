import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

type MoneyTillPaydayProps = {
  moneyTillPayday: number;
  daysTillPayday: number;
};

export const MoneyTillPayday: React.FC<MoneyTillPaydayProps> = ({
  moneyTillPayday,
  daysTillPayday,
}) => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Typography align="center" variant="h5" marginTop={5}>
          Spend every next day
        </Typography>
        <Typography align="center" variant="h2">
          {moneyTillPayday}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography align="center" variant="h5" marginTop={5}>
          Remain days till payday
        </Typography>
        <Typography align="center" variant="h2">
          {daysTillPayday}
        </Typography>
      </Box>
    </>
  );
};
