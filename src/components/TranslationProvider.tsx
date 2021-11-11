import React from 'react';
import { Languages } from '../types';
import { getLanguageFromLocalstorage } from '../utils/localStorage';
import languages from '../language/language.json';
import { IntlProvider } from 'react-intl';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';

export const TranslationContext = React.createContext<any>(() => {});

export const TranslationProvider: React.FC = ({ children }) => {
  const languageFromLocalStorage = getLanguageFromLocalstorage();
  const [selectedLanguage, setSelectedLanguage] = React.useState<Languages>(
    languageFromLocalStorage
  );

  const dateLocale = selectedLanguage === Languages['EN'] ? enLocale : ruLocale

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={dateLocale}>
      <IntlProvider
        locale={selectedLanguage}
        messages={languages[selectedLanguage]}
      >
        <TranslationContext.Provider value={setSelectedLanguage}>
          {children}
        </TranslationContext.Provider>
      </IntlProvider>
    </LocalizationProvider>
  );
};
