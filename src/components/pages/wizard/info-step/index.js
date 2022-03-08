import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import apiQuota from 'api/order-quota';

import { getUser } from 'services/auth';

import { trim } from 'utils';

import EmployeeIdModal from 'components/molecules/modals/employee-id-modal';

import {
  isValidDate,
  normalizeDate,
  isValidEmail,
  isValidId,
  normalizeEmployeeId,
  getTextWidth,
  getRootFontSize,
} from 'utils/helper';
import { WizardContext } from 'contexts/wizard';

import { ContinueButtonWrapper, Button } from '../styles';
import { InputField } from 'styles/global';

import * as S from './styles';

const USER_ID_REGEXP = /^[0-9]{7,}$/i;

const adjustIdInfo = label => {
  const rootFontSize = getRootFontSize();
  const infoIcon = document.getElementById('id-info');
  if (infoIcon) {
    const size = getTextWidth(label, `bold ${rootFontSize}px 'EW Nexa'`);
    infoIcon.style = `left:${size + rootFontSize / 4}px;`;
  }
};

/**
 * Personal Information page
 */
const InfoStep = ({ moveForward, uniqueId }) => {
  const {
    firstName,
    lastName,
    birthday,
    email,
    userId,
    userConfirmId,
    setWizard,
  } = useContext(WizardContext);
  const uniqueIdFormat = uniqueId.format || USER_ID_REGEXP;

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      email: email,
      userId: userId,
      userConfirmId: userConfirmId,
    },
  });

  const watchFields = watch();

  const [showIdModal, setShowIdModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!uniqueId.required) {
      adjustIdInfo(uniqueId.label);
    }
  }, [uniqueId.required, uniqueId.label]);

  const isValidConfirmId = value => {
    return watchFields.userId === value;
  };

  const onSubmit = data => {
    setIsLoading(true);

    const contextData = {
      firstName: data.firstName,
      lastName: data.lastName,
      birthday: data.birthday,
      email: data.email,
      userId: data.userId,
      userConfirmId: data.userConfirmId,
      userIdLabel: uniqueId.label,
    };

    apiQuota({
      email: data.email,
      uniqueId: data.userId,
      accessCode: getUser().accessCode,
    })
      .then(() => {
        contextData.isQuotaFull = false;
      })
      .catch(() => {
        contextData.isQuotaFull = true;
      })
      .finally(() => {
        setIsLoading(false);
        setWizard(contextData);
        moveForward();
      });
  };

  const handleBirthdayChange = e => {
    const normalized = normalizeDate(e.target.value, birthday);
    setValue('birthday', normalized);
  };

  const handleEmployeeIdChange = e => {
    const normalized = normalizeEmployeeId(
      e.target.value,
      userId,
      uniqueIdFormat,
    );

    setValue('userId', normalized);
  };

  const handleEmployeeConfirmIdChange = e => {
    const normalized = normalizeEmployeeId(e.target.value, '', uniqueIdFormat);
    setValue('userConfirmId', normalized);
  };

  const getBirthdayError = () => {
    if (errors.birthday) {
      if (errors.birthday.message) {
        return errors.birthday.message;
      }
      if (errors.birthday.type === 'validate') {
        return 'Please enter a valid date';
      }
    }
    return '';
  };

  const getEmailError = () => {
    if (errors.email) {
      if (errors.email.message) {
        return errors.email.message;
      }
      if (errors.email.type === 'validate') {
        return 'Please enter a valid email';
      }
    }
    return '';
  };

  const getIdError = () => {
    if (errors.userId) {
      if (errors.userId.message) {
        return errors.userId.message;
      }

      if (errors.userId.type === 'validate') {
        const label = uniqueId.label?.replace(/your/gi, '');

        return `Please enter a valid ${label}`;
      }
    }

    return '';
  };

  const getConfirmIdError = () => {
    if (watchFields.userId !== watchFields.userConfirmId) {
      return `IDs do not match. Please try again.`;
    }

    return '';
  };

  return (
    <S.Container>
      <S.Title>Personal Information</S.Title>
      <S.Description>
        Enter your information to order your Everlywell test kit.
      </S.Description>

      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <S.MainForm>
          <InputField
            label="First Name"
            placeholder=""
            name="firstName"
            ref={register({
              required: 'Please enter vaild first name',
            })}
            error={errors.firstName && errors.firstName.message}
          />

          <InputField
            label="Last Name"
            placeholder=""
            name="lastName"
            ref={register({
              required: 'Please enter vaild last name',
            })}
            error={errors.lastName && errors.lastName.message}
          />

          <InputField
            label="Date of birth"
            placeholder="MM/DD/YYYY"
            name="birthday"
            ref={register({
              validate: value => isValidDate(value),
              required: 'Please enter vaild date',
            })}
            error={getBirthdayError()}
            onChange={handleBirthdayChange}
          />

          <InputField
            name="email"
            label="Email"
            placeholder="johndoe@email.com"
            ref={register({
              validate: value => isValidEmail(value),
              required: 'Please enter a valid email',
            })}
            error={getEmailError()}
            onChange={e => setValue('email', trim(e.target.value))}
          />

          {!!uniqueId.required && (
            <>
              <S.InputIconWrapper>
                <InputField
                  label={uniqueId.label}
                  placeholder="ID associated to you"
                  name="userId"
                  ref={register({
                    validate: value => isValidId(value, uniqueIdFormat),
                    required: true,
                  })}
                  error={getIdError()}
                  onChange={handleEmployeeIdChange}
                />
                {/* <S.StyledInfoIcon id="id-info" onClick={() => setShowIdModal(true)} /> */}
              </S.InputIconWrapper>
              <InputField
                label={'Confirm ' + uniqueId.label}
                placeholder="Re-enter ID"
                name="userConfirmId"
                ref={register({
                  validate: value => isValidConfirmId(value),
                  required: true,
                })}
                error={getConfirmIdError()}
                onChange={handleEmployeeConfirmIdChange}
              />
            </>
          )}
        </S.MainForm>

        <ContinueButtonWrapper>
          <Button
            hasArrow={!isLoading}
            type="submit"
            disabled={
              !watchFields.firstName ||
              !watchFields.lastName ||
              !watchFields.birthday ||
              !watchFields.email ||
              (uniqueId.required &&
                (!watchFields.userId || !watchFields.userConfirmId)) ||
              isLoading
            }
            isLoading={isLoading}
          >
            Continue
          </Button>
        </ContinueButtonWrapper>
      </S.StyledForm>

      <EmployeeIdModal
        show={showIdModal}
        handleClose={() => setShowIdModal(false)}
      />
    </S.Container>
  );
};

export default InfoStep;
