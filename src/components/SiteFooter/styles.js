import styled from 'styled-components';
import { Container, size, typography, mediaQueries } from '@everlywell/leaves';

const FooterWrapper = styled(Container)`
  display: block;
  padding-top: ${size.xl1}px;
  padding-bottom: ${size.xl1}px;
`;

const FooterLogo = styled.img`
  height: 24px;
  width: 107px;
  margin: 0 auto ${size.xl2}px;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-bottom: ${size.lg}px;
  }
`;

const FooterContent = styled.div`
  ${mediaQueries.forTabletHorizontalUp} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  display: block;
`;

const LinksBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${mediaQueries.forTabletHorizontalUp} {
    display: flex;
    justify-content: space-between;

    a:not(:last-child) {
      margin-right: ${size.md}px;
    }
  }
`;

const CaptionText = styled.a`
  display: block;
  ${typography.captionText};
  text-decoration: none;
  text-align: center;
  margin-bottom: ${size.xs1}px;
`;

const PrivacyAct = styled(CaptionText)`
  grid-column: 1 / span 2;
`;

export {
  FooterWrapper,
  FooterLogo,
  FooterContent,
  Copyright,
  LinksBlock,
  CaptionText,
  PrivacyAct,
};
