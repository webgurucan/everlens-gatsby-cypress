import React from 'react';

import TriangleRight from 'components/icons/triangle-right';

import * as S from './styles';

const AlreadyLink = ({ onClick, linkLabel }) => {
  return (
    <S.SignWrapper>
      <S.CenterText>Already an Everlywell member?</S.CenterText>
      <S.SignRow>
        <S.SignLink onClick={onClick}>{linkLabel}</S.SignLink>
        <TriangleRight />
      </S.SignRow>
    </S.SignWrapper>
  );
};
export default AlreadyLink;
