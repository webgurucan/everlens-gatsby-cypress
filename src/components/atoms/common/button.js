import React from 'react';
import styled from 'styled-components';

import { Button as BaseButton, colors } from '@everlywell/leaves';

const Button = styled(BaseButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${props =>
    props.isLoading &&
    `
    &:disabled {
      background:${colors.green5};
      cursor: not-allowed;
      pointer-events: all !important;
    }

    .loader {
      margin: auto;
      border: 2px solid rgba(191, 219, 178, 0.84);
      border-radius: 50%;
      border-top: 2px solid ${props.spinnerColor};
      width: 25px;
      height: 25px;
      -webkit-animation: spin 1s linear infinite; /* Safari */
      animation: spin 1s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
`;

export default ({
  children,
  className,
  style,
  isLoading,
  isDisabled,
  ...rest
}) => {
  return (
    <Button
      className={className}
      style={style}
      isLoading={isLoading}
      spinnerColor="white"
      disabled={isLoading || isDisabled}
      {...rest}
    >
      {isLoading ? <div className="loader" /> : children}
    </Button>
  );
};
