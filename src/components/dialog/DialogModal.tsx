import {
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { RussianIcon } from '../LanguageIcons/RussianIcon';
import { EnglishIcon } from '../LanguageIcons/EnglishIcon';
import { TranslationContext } from '../TranslationProvider';
import { Languages } from '../../types';
import { saveLanguageToLocalstorage, saveThemeModeToLocalstorage } from '../../utils/localStorage';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ThemeContext } from '../../ColorThemeProvider';

const useStyles = makeStyles(() => ({
  root: { paddingTop: 10 },
  selectLanguage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectTheme: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

type DialogModalProps = {
  open: boolean;
  isSetup: boolean;
  setOpen: () => void;
  onResetApp: () => void;
};

export const DialogModal: React.FC<DialogModalProps> = ({
  setOpen,
  open,
  onResetApp,
  isSetup,
}) => {
  const classes = useStyles();
  const setLagnuage = React.useContext(TranslationContext);
  const {toggleColorMode} = React.useContext(ThemeContext)

  const onChangeLanguage = (lang: Languages) => {
    saveLanguageToLocalstorage(lang);
    setLagnuage(lang);
  };

  const onChangeThemeColor = (mode: 'light' | 'dark') => {
    saveThemeModeToLocalstorage(mode);
    toggleColorMode(mode);
  };

  return (
    <Dialog open={open} onClose={setOpen} fullWidth className={classes.root}>
      <Typography align="center" variant="h5" paddingTop={2}>
        <FormattedMessage
          id="app.settings"
          defaultMessage="Settings"
          description="Settings"
        />
      </Typography>
      <DialogActions style={{ justifyContent: 'center', marginTop: 20 }}>
        <Box display="flex" flexDirection="column">
          <div className={classes.selectLanguage}>
            <Typography variant="h6">
              <FormattedMessage
                id="app.language"
                defaultMessage="Select language"
                description="Select language"
              />
            </Typography>
            <div>
              <IconButton onClick={() => onChangeLanguage(Languages['RU'])}>
                <RussianIcon />
              </IconButton>
              <IconButton onClick={() => onChangeLanguage(Languages['EN'])}>
                <EnglishIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.selectTheme}>
            <Typography variant="h6">
              <FormattedMessage
                id="app.theme"
                defaultMessage="Select theme"
                description="Select theme"
              />
            </Typography>
            <div>
              <IconButton size="large" onClick={() => onChangeThemeColor('dark')}>
                <DarkMode fontSize='large'/>
              </IconButton>
              <IconButton size="large" onClick={() => onChangeThemeColor('light')}>
                <LightMode fontSize='large'/>
              </IconButton>
            </div>
          </div>
          {!isSetup && (
            <Button
              style={{ marginTop: 50 }}
              endIcon={<RestartAltIcon />}
              color="warning"
              variant="outlined"
              onClick={onResetApp}
            >
              <FormattedMessage
                id="app.restart"
                defaultMessage="Restart app"
                description="Restart app"
              />
            </Button>
          )}
        </Box>
      </DialogActions>
    </Dialog>
  );
};
