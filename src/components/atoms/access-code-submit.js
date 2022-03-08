import React from 'react';

import { SubmitButton } from '../Introduction/styles';

const AccessCodeSubmit = ({ ...props }) => (
  <SubmitButton appearance="primary" {...props}>
    Order your test
  </SubmitButton>
);

export default AccessCodeSubmit;
