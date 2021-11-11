import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { TranslationProvider } from './components/TranslationProvider';
import { ColorThemeProvider } from './ColorThemeProvider';

ReactDOM.render(
  <TranslationProvider>
    <StyledEngineProvider injectFirst>
      <ColorThemeProvider>
        <App />
      </ColorThemeProvider>
    </StyledEngineProvider>
  </TranslationProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
