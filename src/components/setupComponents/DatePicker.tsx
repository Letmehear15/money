import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import MobileDatePicker from '@mui/lab/DatePicker';
import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

type PickerPayloadDateProps = {
  payday: Date | null;
  setPayday: (date: Date | null) => void;
  setValidateError: (arg: boolean) => void;
};

export const PickerPayloadDate: FC<PickerPayloadDateProps> = ({
  payday,
  setPayday,
  setValidateError,
}) => {
  const onChangePayday = (date: Date | null) => {
    setPayday(date);
  };

  const onError = (res: any) => {
    if (res) {
      setValidateError(true);
    }
    if (!res) {
      setValidateError(false);
    }
  };

  return (
    <>
      <Typography marginBottom={1}>
        <FormattedMessage
          id="datePicker.payday"
          description="Select your next payday"
          defaultMessage="Select your next payday: "
        />
      </Typography>
      <MobileDatePicker
        label={<FormattedMessage id="datePicker.label" description="Payday" defaultMessage="Payday"/>}
        value={payday}
        onChange={onChangePayday}
        okText={<FormattedMessage id="datePicker.okButton" description="Select" defaultMessage="Select"/>}
        cancelText=""
        clearText={<FormattedMessage id="datePicker.clearButton" description="Clear" defaultMessage="Clear"/>}
        clearable
        onError={onError}
        disableHighlightToday
        renderInput={(params) => <TextField fullWidth required {...params} />}
      />
    </>
  );
};
