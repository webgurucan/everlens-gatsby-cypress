import styled from 'styled-components';

import { Button, colors, mediaQueries } from '@everlywell/leaves';

import Modal from '../Modal';

const StyledModal = styled(Modal)`
  width: 20.438rem;
  max-height: calc(100vh - 10rem);

  padding: 1.5rem 0;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 43.75rem;

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
  margin-top: 3.25rem;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 19.063rem;
    margin: 3.25rem auto 0;
  }
`;

const PasswordLink = styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.27px;
  color: ${colors.green5};
  text-align: right;
  cursor: pointer;
`;

const RememberRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
  margin-top: 1rem;
  margin-bottom: 2.125rem;
`;

const Text = styled.div`
  font-size: 1rem;
  color: ${colors.gray4};
`;

const CenterText = styled(Text)`
  text-align: center;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: 2rem;
`;

const SignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQueries.forTabletHorizontalUp} {
    flex-direction: row;
  }
`;

const SignRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const SignLink = styled.div`
  margin-right: 0.375rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${colors.green5};
  cursor: pointer;
`;

export {
  StyledModal,
  TitleWrapper,
  TitleSpace,
  Title,
  Form,
  PasswordLink,
  RememberRow,
  Text,
  CenterText,
  LoginButton,
  SignWrapper,
  SignRow,
  SignLink,
};
