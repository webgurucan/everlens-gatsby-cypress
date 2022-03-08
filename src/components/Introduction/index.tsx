import React from 'react';

import { HyphenatedWord } from '../../styles/global';

import * as S from './styles';
import AccessCodeForm from '../molecules/access-code-form.js';

const plusIcon = require('../../images/plus-icon.svg');
const everlywellLogo = require('../../images/everlywell.svg');

type Props = {
  heroText: string;
  welcomeMsg: string;
  customerLogo: any;
};

const hyphenatePhrase = phrase => {
  const words = phrase?.split(' ') || [];

  return words.map(e => (
    <>
      <HyphenatedWord>{e}</HyphenatedWord>{' '}
    </>
  ));
};

const Introduction = (props: Props) => {
  const { heroText, welcomeMsg, customerLogo } = props;

  return (
    <S.IntroWrapper>
      <S.ImageWrapper>
        <S.IntroText>{hyphenatePhrase(heroText)}</S.IntroText>
      </S.ImageWrapper>
      <S.IntroContainer>
        <S.LogoWrapper>
          {/* TODO: Replace with client logo from contentful */}
          {customerLogo ? (
            <>
              <S.ClientLogo alt="client logo" src={customerLogo} />
              <S.Icon alt="" src={plusIcon} />
            </>
          ) : null}

          <S.Logo alt="everlywell logo" src={everlywellLogo} />
        </S.LogoWrapper>
        <S.DetailsWrapper>
          <S.HeroText dangerouslySetInnerHTML={{ __html: welcomeMsg }} />
          <S.GetStartedWrapper>
            <S.GetStarted>Get Started</S.GetStarted>
            <S.HeroText>
              Use the invitation code provided by your organization
            </S.HeroText>
            <S.AccessCodeFormWrapper>
              <AccessCodeForm />
            </S.AccessCodeFormWrapper>
          </S.GetStartedWrapper>
        </S.DetailsWrapper>
      </S.IntroContainer>
    </S.IntroWrapper>
  );
};

export default Introduction;
