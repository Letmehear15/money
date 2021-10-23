export const getMoneyFromLocalstorage = () => {
  const money = localStorage.getItem('money');
  if (money) {
    return Number(money);
  }
  return null;
};

export const saveMoneyToLocalstorage = (money: number | null) => {
  if (money) {
    localStorage.setItem('money', String(money));
    return;
  }
  localStorage.setItem('money', '');
};

export const getPaydayDate = (): Date | null => {
  const payday = localStorage.getItem('payday');
  if (payday) {
    return new Date(payday);
  }
  return null;
};

export const savePayDateToLocalstorage = (date: Date | null) => {
  if (date) {
    localStorage.setItem('payday', String(date));
    return;
  }

  localStorage.setItem('payday', '');
};


export const removeInfoFromLocalstorage = () => {
    localStorage.removeItem('money')
    localStorage.removeItem('payday')
}