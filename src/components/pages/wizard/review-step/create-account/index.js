import React from 'react';

import Check from 'components/atoms/common/check';

import { InputField } from 'styles/global';

import { TC_LINK } from 'utils/constants';

import * as S from './styles';

const PasswordIndicator = ({ gray }) => {
  return (
    <S.Lines>
      {Array.from({ length: 8 }, (_, index) =>
        gray ? <S.GrayLine key={index} /> : <S.Line key={index} />,
      )}
    </S.Lines>
  );
};

const CreateAccount = ({
  style,
  className,
  email,
  password,
  passwordAgain,
  setEmail,
  setPassword,
  setPasswordAgain,
}) => {
  return (
    <S.Container style={style} className={className}>
      <S.Inputs>
        <InputField
          name="email"
          label="Email"
          placeholder=""
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <S.PasswordWrapper>
          <InputField
            label="Create a password (Optional)"
            placeholder=""
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="createpassword"
            type="password"
          />
          <PasswordIndicator gray={!password} />
        </S.PasswordWrapper>

        <InputField
          label="Retype password"
          placeholder=""
          value={passwordAgain}
          onChange={e => setPasswordAgain(e.target.value)}
          name="retypepassword"
          type="password"
        />
      </S.Inputs>

      <S.Row>
        <Check />
        <S.Terms>
          <S.Text>I have read and accept the</S.Text>{' '}
          <S.Link href={TC_LINK} target="_blank">
            Terms and Conditions
          </S.Link>
        </S.Terms>
      </S.Row>
    </S.Container>
  );
};
export default CreateAccount;
