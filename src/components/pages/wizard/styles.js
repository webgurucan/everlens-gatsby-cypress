import styled from 'styled-components';

import {
  Container as MainContainer,
  size,
  colors,
  mediaQueries,
} from '@everlywell/leaves';

import BaseButton from 'components/atoms/common/button';

const OuterWrapper = styled.div`
  display: flex;
  background: white;

  ${mediaQueries.forTabletHorizontalUp} {
    background: ${colors.teal1};
    padding-top: ${size.xl3}px;
  }
`;

const InnerWrapper = styled.div`
  background: white;
  max-width: 648px;
  margin: 0 auto;
  width: 100%;

  ${mediaQueries.forTabletHorizontalUp} {
    margin: 0px auto ${size.xl3}px;
    border-radius: 1px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.13);
  }
`;

const ContinueButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${size.xl2}px 0;

  button {
    width: 100%;

    svg {
      display: none;
    }
  }

  ${mediaQueries.forTabletHorizontalUp} {
    justify-content: flex-end;
    padding: 0;

    button {
      width: auto;

      svg {
        display: inline-block;
      }
    }
  }
`;

const StyledMainContainer = styled(MainContainer)`
  width: 23.438rem;
  padding: 0;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 40.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-top: 50px;
`;

const ProgressBarWrapper = styled.div`
  width: 80%;
  align-self: center;
`;

const Button = styled(BaseButton)`
  ${mediaQueries.forTabletHorizontalUp} {
    width: 9.675rem !important;
  }
`;

export {
  OuterWrapper,
  InnerWrapper,
  ContinueButtonWrapper,
  StyledMainContainer,
  Container,
  ProgressBarWrapper,
  Button,
};
