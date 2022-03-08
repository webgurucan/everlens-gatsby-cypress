import React from 'react';
import * as S from './styles';
import { APP_ROOT } from 'utils/constants';

const everlywellLogo = require('images/everlywellLogo.svg');

const SiteFooter = () => {
  return (
    <S.FooterWrapper>
      <S.FooterLogo alt="everlywell logo" src={everlywellLogo} />
      <S.FooterContent>
        <S.Copyright>
          <S.CaptionText>
            © 2020 Everlywell, Inc. All rights reserved.
          </S.CaptionText>
        </S.Copyright>
        <S.LinksBlock>
          <S.CaptionText href={`${APP_ROOT}/privacy-policy/`} target="_blank">
            Privacy Policy
          </S.CaptionText>
          <S.CaptionText href={`${APP_ROOT}/terms-of-use/`} target="_blank">
            Terms of Use
          </S.CaptionText>
          <S.PrivacyAct
            href={`${APP_ROOT}/privacy-policy#ccpa`}
            target="_blank"
          >
            CA Consumer Privacy Act
          </S.PrivacyAct>
        </S.LinksBlock>
      </S.FooterContent>
    </S.FooterWrapper>
  );
};

export default SiteFooter;
