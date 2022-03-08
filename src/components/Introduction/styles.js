import styled from 'styled-components';
import {
  typography,
  size,
  Input,
  Container,
  H2,
  mediaQueries,
  colors,
} from '@everlywell/leaves';

import Button from 'components/atoms/common/button';

const heroMobile = require('./images/heroMobile.png');
const heroDesktop = require('./images/heroDesktop.png');
const maskbg = require('./images/maskbg.png');

const IntroWrapper = styled.div`
  ${mediaQueries.forTabletHorizontalUp} {
    margin-bottom: ${size.xl8}px;
  }
`;

const IntroContainer = styled(Container)`
  ${mediaQueries.forTabletHorizontalUp} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: ${size.xl5}px;
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${heroMobile});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 24px;
  width: 100%;
  height: 392px;
  text-align: center;

  ${mediaQueries.forTabletVerticalUp} {
    height: 560px;
  }

  ${mediaQueries.forTabletHorizontalUp} {
    background-image: url(${heroDesktop});
  }
`;

const IntroText = styled.h1`
  color: ${colors.teal6};

  font-weight: 600;
  font-size: 2.886rem;
  line-height: 3.5rem;
  letter-spacing: -0.76px;

  ${mediaQueries.forTabletHorizontalUp} {
    font-size: 4.11rem;
    line-height: 4.5rem;
    letter-spacing: -0.89px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 0 23px;

  ${mediaQueries.forTabletHorizontalUp} {
    justify-content: center;
    padding: 0;
    background-image: url(${maskbg});
  }

  ${mediaQueries.forDesktopUp} {
    width: 537px;
  }
`;

const DetailsWrapper = styled.div`
  ${mediaQueries.forTabletHorizontalUp} {
    margin-left: ${size.xl5}px;
  }
`;

const Logo = styled.img`
  height: 32px;
  margin: 12px 0;
  width: auto;
`;

const ClientLogo = styled.img`
  width: 250px;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

const HeroText = styled.div`
  ${typography.bodyTextSmall};
  width: 100%;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: 0.3px;
    color: ${colors.green5};
  }

  ${mediaQueries.forTabletHorizontalUp} {
    text-align: left;
  }
`;

const GetStartedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: ${size.xl4}px 0;

  ${mediaQueries.forTabletHorizontalUp} {
    margin: ${size.xl3}px 0;
  }
`;

const GetStarted = styled(H2)`
  width: 100%;

  ${mediaQueries.forTabletHorizontalUp} {
    text-align: left;
  }
`;

const AccessCodeFormWrapper = styled.div`
  width: 100%;
  margin-top: ${size.lg}px;

  label {
    text-align: left;
    margin-bottom: 2px;
  }

  div input[name='accessCode'] {
    border-radius: 1px;
    box-shadow: 4px 4px 6px -5px rgba(0, 0, 0, 0.1);
    border: solid 1px #d6ebdd;
    height: 48px;
    padding: 8px 16px;

    &:focus {
      box-shadow: 4px 4px 6px -5px rgba(0, 0, 0, 0.1);
      border: solid 1px #d6ebdd;
    }
  }

  > div {
    ${mediaQueries.forTabletHorizontalUp} {
      width: 326px;
      margin-right: ${size.md}px;
    }
  }

  ${mediaQueries.forTabletHorizontalUp} {
    display: flex;
  }
`;

const CodeInput = styled(Input)`
  text-align: left;
  input {
    text-transform: uppercase;

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      text-transform: initial;
    }
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 28px;
  width: 100%;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 188px;
    height: 48px;
    margin-top: 26px;
  }
`;

export {
  IntroWrapper,
  ImageWrapper,
  IntroText,
  IntroContainer,
  LogoWrapper,
  DetailsWrapper,
  Logo,
  ClientLogo,
  Icon,
  HeroText,
  GetStartedWrapper,
  AccessCodeFormWrapper,
  CodeInput,
  SubmitButton,
  GetStarted,
};
