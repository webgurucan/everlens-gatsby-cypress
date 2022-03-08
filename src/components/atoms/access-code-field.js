import React from 'react';
import { CodeInput } from '../Introduction/styles';

const AccessCodeField = ({ value, onChange, error }) => (
  <CodeInput
    value={value}
    onChange={onChange}
    error={error}
    id="accessCode"
    name="accessCode"
    label="Your organization invitation code"
    placeholder="Enter code"
  />
);

export default AccessCodeField;
