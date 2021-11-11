import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { getThemeModeFromLocalstorage } from './utils/localStorage';

export const ThemeContext = React.createContext({
  toggleColorMode: (mode: 'light' | 'dark') => {},
});

export const ColorThemeProvider: React.FC = ({ children }) => {
  const themeFromLocalstorage = getThemeModeFromLocalstorage();
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>(
    themeFromLocalstorage
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (mode: 'light' | 'dark') => {
        setThemeMode(mode);
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
};
