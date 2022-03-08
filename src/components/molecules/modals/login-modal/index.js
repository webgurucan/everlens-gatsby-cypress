import React from 'react';

import Check from 'components/atoms/common/check';
import AlreadyLink from 'components/molecules/auth/already-link';

import { Container } from '@everlywell/leaves';

import { InputField } from 'styles/global';

import * as S from './styles';

const LoginModal = ({ show, handleClose, handleSignup }) => {
  return (
    <S.StyledModal show={show} handleClose={handleClose}>
      <Container>
        <S.TitleWrapper>
          <S.Title>
            Log In to<S.TitleSpace>&nbsp;</S.TitleSpace>
          </S.Title>
          <S.Title>My Everly</S.Title>
        </S.TitleWrapper>
        <S.Form>
          <InputField label="Email" />
          <InputField label="Password" type="password" />
          <S.PasswordLink>Forgot Password</S.PasswordLink>
          <S.RememberRow>
            <Check />
            <S.Text>Remember Me</S.Text>
          </S.RememberRow>
          <S.LoginButton>Log In</S.LoginButton>
        </S.Form>

        <AlreadyLink onClick={handleSignup} linkLabel="Sign Up" />
      </Container>
    </S.StyledModal>
  );
};

export default LoginModal;
