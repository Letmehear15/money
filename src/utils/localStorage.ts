import { Languages } from '../types';

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
  localStorage.removeItem('money');
  localStorage.removeItem('payday');
};

export const saveLanguageToLocalstorage = (language: Languages) => {
  localStorage.setItem('moneyLanguage', language);
};

export const getLanguageFromLocalstorage = ():Languages => {
  const selectedLanguage = localStorage.getItem('moneyLanguage') as Languages;
  if(selectedLanguage) {
    return Languages[selectedLanguage] 
  }

  return Languages['EN']
};

export const saveThemeModeToLocalstorage = (mode: 'light' | 'dark') => {
  localStorage.setItem('moneyThemeMode',mode)
}

export const getThemeModeFromLocalstorage = (): 'light' | 'dark' => {
  const mode = localStorage.getItem('moneyThemeMode') as 'light' | 'dark'
  if(mode) {
    return mode
  }
  return 'dark'
}

// TODO create one function for create, get and so on...