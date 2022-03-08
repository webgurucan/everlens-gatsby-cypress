import React from 'react';

import * as S from './styles.js';

const Options = ({ selectedShippingMethodId, name, options, onChange }) => {
  return (
    <S.Container>
      {options.map(option => (
        <S.OptionWrapper key={option.id}>
          <S.Input
            type="radio"
            name={name}
            value={option.id}
            checked={selectedShippingMethodId === option.id}
            onClick={() => onChange(option.id)}
          />
          <S.Option>
            <S.OptionButton>
              <S.Circle />
            </S.OptionButton>
            <S.OptionLabel>{option.component}</S.OptionLabel>
          </S.Option>
        </S.OptionWrapper>
      ))}
    </S.Container>
  );
};

export default Options;
