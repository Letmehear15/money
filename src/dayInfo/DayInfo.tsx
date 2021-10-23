import React from 'react';
import {
  getMoneyFromLocalstorage,
  getPaydayDate,
  saveMoneyToLocalstorage,
} from '../utils/localStorage';
import { MoneyTillPayday } from './MoneyTillPayday';
import { SpentMoneyPerDay } from './SpentMoneyPerDay';

function dateDiffInDays(a: Date, b: Date) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / (1000 * 3600 * 24));
}

const getDaysTillPayday = () => {
  const todayDate = new Date();
  const payDate = getPaydayDate();
  if (todayDate && payDate) {
    return dateDiffInDays(todayDate, payDate);
  }
  return 0;
};

const calcMoneyPerDay = () => {
  const todayDate = new Date();
  const payDate = getPaydayDate();
  const moneyTillpayday = getMoneyFromLocalstorage();
  if (payDate && moneyTillpayday) {
    const diffInDays = dateDiffInDays(todayDate, payDate);
    return Math.floor(moneyTillpayday / diffInDays);
  }
  return 0;
};

export const DayInfo = () => {
  const [spentMoney, setSpentMoney] = React.useState<number>();
  const [moneyTillPayday, setMoneyTillPayday] = React.useState<number>();

  const daysTillPayday = getDaysTillPayday();

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SpentMoneyPerDay
        onApplyMoney={onApplyMoney}
        setSpentMoney={setSpentMoney}
        spentMoney={spentMoney}
      />
      <MoneyTillPayday
        daysTillPayday={daysTillPayday}
        moneyTillPayday={moneyTillPayday}
      />
    </div>
  );
};
