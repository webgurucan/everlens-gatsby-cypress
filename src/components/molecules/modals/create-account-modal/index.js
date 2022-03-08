import React, { useState } from 'react';

import BasicCreateAccount from 'components/molecules/auth/create-account';
import AlreadyLink from 'components/molecules/auth/already-link';

import { InputField } from 'styles/global';

import * as S from './styles';

const CreateAccountModal = ({ show, handleClose, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  return (
    <S.StyledModal show={show} handleClose={handleClose}>
      <S.Container>
        <S.Title>Create an account</S.Title>
        <S.Form>
          <InputField label="First Name" />
          <InputField label="Last Name" />
          <BasicCreateAccount
            email={email}
            password={password}
            passwordAgain={passwordAgain}
            setEmail={e => setEmail(e)}
            setPassword={e => setPassword(e)}
            setPasswordAgain={e => setPasswordAgain(e)}
          />
          <S.SignupButton>Create My Account</S.SignupButton>
        </S.Form>
        <AlreadyLink onClick={handleLogin} linkLabel="Log In" />
      </S.Container>
    </S.StyledModal>
  );
};

export default CreateAccountModal;
