import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import MobileDatePicker from '@mui/lab/DatePicker';
import { Typography } from '@mui/material';

type PickerPayloadDateProps = {
  payday: Date | null,
  setPayday: (date: Date | null) => void
};

export const PickerPayloadDate: FC<PickerPayloadDateProps> = ({payday, setPayday}) => {

  const onChangePayday = (date: Date | null) => {
    setPayday(date);
  };

  return (
    <>
      <Typography marginBottom={1}>Select your next payday: </Typography>
      <MobileDatePicker
        label="Payday"
        value={payday}
        onChange={onChangePayday}
        okText="Select"
        cancelText=""
        clearable
        disableHighlightToday
        renderInput={(params) => <TextField fullWidth required {...params} />}
      />
    </>
  );
};
