import React, { useContext } from 'react';

import { Button } from '@everlywell/leaves';

import { MainContainerWrapper } from 'styles/global';
import { ContinueButtonWrapper } from '../styles';
import * as S from './styles';

import { WizardContext } from 'contexts/wizard';

import TestsList from './TestsList';
import FullQuotaZeroState from './FullQuotaZeroState';
import NoTestsZeroState from './NoTestsZeroState';

const TestsStep = ({ products, moveForward }) => {
  const { firstName, isQuotaFull } = useContext(WizardContext);

  const isProductsListEmpty = products?.length === 0;

  return (
    <MainContainerWrapper>
      <S.Greeting>Welcome, {firstName}</S.Greeting>
      <S.Description>
        With Everlywell, you can access lab tests from the comfort of your home.
      </S.Description>

      {isQuotaFull ? (
        <FullQuotaZeroState />
      ) : isProductsListEmpty ? (
        <NoTestsZeroState />
      ) : (
        <TestsList products={products} />
      )}

      <ContinueButtonWrapper>
        <Button
          hasArrow
          onClick={() => moveForward()}
          disabled={isQuotaFull || isProductsListEmpty}
        >
          Continue
        </Button>
      </ContinueButtonWrapper>
    </MainContainerWrapper>
  );
};

export default TestsStep;
