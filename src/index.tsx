import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
