import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { authorize, setInnerNavigate } from '../../services/auth';

import { trim } from 'utils';

import accessCodeValidator from 'api/access-code-validator';

import { AccessCodeField, AccessCodeSubmit } from '../atoms';

const SUCCESS_URL = '/app/wizard';

const INVALID_ERROR_MESSAGE = 'Please enter valid access code';
const UNAVAILABLE_ERROR_MESSAGE = 'This code is no longer valid';

const AccessCodeForm = () => {
  const [code, updateCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = event => {
    const accessCode = event.target.value;

    updateCode(_ => {
      // removes error message when editing
      !!error && setError('');

      return trim(accessCode?.toUpperCase());
    });
  };

  const checkAccessCode = () => {
    setIsLoading(true);

    accessCodeValidator(code).then(
      ({
        data: {
          isValid,
          isAvailable,
          product_ids,
          contentful_product_ids,
          unique_id_required,
          unique_id_format,
          unique_id_label,
          enterprise_client_id,
          shipping_methods,
        },
      }) => {
        setIsLoading(false);

        if (isValid && isAvailable) {
          authorize({ accessCode: code });

          setInnerNavigate();
          navigate(SUCCESS_URL, {
            state: {
              productIds: product_ids,
              contentfulProductIds: contentful_product_ids,
              shippingMethods: shipping_methods,
              enterprise_client_id,
              uniqueId: {
                required: unique_id_required,
                format: unique_id_format,
                label: unique_id_label,
              },
            },
          });
        }

        if (!isValid) {
          setError(INVALID_ERROR_MESSAGE);
        } else if (!isAvailable) {
          setError(UNAVAILABLE_ERROR_MESSAGE);
        }
      },
    );
  };

  return (
    <>
      <AccessCodeField value={code} onChange={onChange} error={error} />
      <AccessCodeSubmit
        onClick={checkAccessCode}
        isDisabled={!code}
        isLoading={isLoading}
      />
    </>
  );
};
export default AccessCodeForm;
