import styled from 'styled-components';

import { Button, colors, size, mediaQueries } from '@everlywell/leaves';

import Modal from '../Modal';

const StyledModal = styled(Modal)`
  width: 21.438rem;
  max-height: calc(100vh - 10rem);

  ${mediaQueries.forTabletHorizontalUp} {
    width: 43.75rem;
  }
`;

const Container = styled.div`
  padding: 3.5rem ${size.lg}px 3.063rem;

  ${mediaQueries.forTabletHorizontalUp} {
    padding: 4.5rem 0rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQueries.forTabletHorizontalUp} {
    flex-direction: row;
  }
`;

const TitleSpace = styled.span`
  display: none;

  ${mediaQueries.forTabletHorizontalUp} {
    display: inline;
  }
`;

const Title = styled.div`
  font-size: 2.027rem;
  line-height: 1.48;
  letter-spacing: -0.18px;
  text-align: center;
  color: ${colors.teal6};
`;

const Form = styled.div`
  margin-top: ${size.xl3}px;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 19.063rem;
    margin: ${size.xl3}px auto 0;
  }
`;

const SignupButton = styled(Button)`
  width: 100%;
  margin-bottom: ${size.xl1}px;
`;

export {
  StyledModal,
  Container,
  TitleWrapper,
  TitleSpace,
  Title,
  Form,
  SignupButton,
};
