import React from 'react';

import Options from 'components/atoms/common/Options';

import * as S from './styles.js';

const DeliveryOptionsSelector = ({ shippingMethodId, options, onChange }) => {
  const optionsCom = options.map(option => {
    return {
      id: option.id,
      component: (
        <S.OptionWrapper key={option.id}>
          <S.OptionTitle>{option.name}</S.OptionTitle>
          <S.OptionDescription>{option.description}</S.OptionDescription>
        </S.OptionWrapper>
      ),
    };
  });

  return (
    <S.Wrapper>
      <S.Title>Delivery Options</S.Title>
      <S.Description>
        Select delivery option for your test kit order. Overnight shipping from
        you to the lab is included, regardless of your selection.
      </S.Description>
      <Options
        name="delivery"
        options={optionsCom}
        onChange={onChange}
        selectedShippingMethodId={shippingMethodId}
      />
    </S.Wrapper>
  );
};

export default DeliveryOptionsSelector;
