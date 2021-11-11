import { Button } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import SettingsIcon from '@mui/icons-material/Settings';

type SettingButtonProps = {
  setOpen: () => void;
};

export const SettingButton: React.FC<SettingButtonProps> = ({ setOpen }) => {
  return (
    <Button
      endIcon={<SettingsIcon />}
      style={{ marginTop: 20 }}
      color="info"
      variant="outlined"
      fullWidth
      onClick={setOpen}
    >
      <FormattedMessage
        id="app.settings"
        defaultMessage="Settings"
        description="Settings"
      />
    </Button>
  );
};
