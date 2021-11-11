import { Box } from '@mui/system';
import React from 'react';
import {
  getMoneyFromLocalstorage,
  saveMoneyToLocalstorage,
} from '../../utils/localStorage';
import { MoneyTillPayday } from './MoneyTillPayday';
import { SpentMoneyPerDay } from './SpentMoneyPerDay';
import { calcMoneyPerDay, getDaysTillPayday } from '../../utils/helper';
import { Loading } from '../Loading';

type DayInfoProps = {
};

export const DayInfo: React.FC<DayInfoProps> = () => {
  const [spentMoney, setSpentMoney] = React.useState<number>();
  const [moneyTillPayday, setMoneyTillPayday] = React.useState<number>();

  const daysTillPayday = getDaysTillPayday();
  const totalMoney = getMoneyFromLocalstorage();

  const onApplyMoney = () => {
    const moneyTillpayday = getMoneyFromLocalstorage();
    if (moneyTillpayday && spentMoney) {
      const moneyDiff = moneyTillpayday - spentMoney;
      saveMoneyToLocalstorage(moneyDiff);
      setMoneyTillPayday(calcMoneyPerDay());
      setSpentMoney(undefined);
    }
  };

  React.useEffect(() => {
    setMoneyTillPayday(calcMoneyPerDay());
  }, []);

  if (moneyTillPayday === undefined) {
    return <Loading />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <div>
        <MoneyTillPayday
          daysTillPayday={daysTillPayday}
          moneyTillPayday={moneyTillPayday}
          totalMoney={totalMoney}
        />
        <SpentMoneyPerDay
          onApplyMoney={onApplyMoney}
          setSpentMoney={setSpentMoney}
          spentMoney={spentMoney}
        />
      </div>
    </Box>
  );
};
