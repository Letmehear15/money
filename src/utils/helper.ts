import { getMoneyFromLocalstorage, getPaydayDate } from './localStorage';

export function dateDiffInDays(a: Date, b: Date) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / (1000 * 3600 * 24));
}

export const getDaysTillPayday = () => {
  const todayDate = new Date();
  const payDate = getPaydayDate();
  if (todayDate && payDate) {
    return dateDiffInDays(todayDate, payDate);
  }
  return 0;
};

export const calcMoneyPerDay = () => {
  const todayDate = new Date();
  const payDate = getPaydayDate();
  const moneyTillpayday = getMoneyFromLocalstorage();
  if (payDate && moneyTillpayday) {
    const diffInDays = dateDiffInDays(todayDate, payDate);
    return Math.floor(moneyTillpayday / diffInDays);
  }
  return 0;
};
