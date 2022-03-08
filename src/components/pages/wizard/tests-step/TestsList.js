import React from 'react';

import { HyphenatedWord } from 'styles/global';
import * as S from './styles';

import Product from './product';

const TestsList = ({ products }) => (
  <>
    <S.AvailableTestsTitle>Available Tests</S.AvailableTestsTitle>
    <S.AvailableTestsMessage>
      You will receive the following <HyphenatedWord>at-home</HyphenatedWord>{' '}
      test kits
    </S.AvailableTestsMessage>

    {products.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </>
);

export default TestsList;
