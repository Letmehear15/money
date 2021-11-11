import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';

type MoneyTillPaydayProps = {
  moneyTillPayday: number;
  daysTillPayday: number;
  totalMoney: number | null;
};

export const MoneyTillPayday: React.FC<MoneyTillPaydayProps> = ({
  moneyTillPayday,
  daysTillPayday,
  totalMoney,
}) => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        {totalMoney && (
          <>
            <Typography align="center" variant="h5" marginTop={2}>
              <FormattedMessage
                id="money.total"
                description="Total amount of money"
                defaultMessage="Total amount of money"
              />
            </Typography>
            <Typography align="center" variant="h2">
              {totalMoney}
            </Typography>
          </>
        )}
        <Typography align="center" variant="h5" marginTop={5}>
          <FormattedMessage
            id="money.spendEveryDay"
            description="Spend every next day"
            defaultMessage="Spend every next day"
          />
        </Typography>
        <Typography align="center" variant="h2">
          {moneyTillPayday}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography align="center" variant="h5" marginTop={5}>
          <FormattedMessage
            id="money.remainTillPayday"
            description="Remain days till payday"
            defaultMessage="Remain days till payday"
          />
        </Typography>
        <Typography align="center" variant="h2">
          {daysTillPayday}
        </Typography>
      </Box>
    </>
  );
};
