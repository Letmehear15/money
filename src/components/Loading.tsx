import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Loading = () => {
  return (
    <FormattedMessage
      id="app.loading"
      defaultMessage="Loading..."
      description="Loading app"
    />
  );
};
