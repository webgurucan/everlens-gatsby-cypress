import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@everlywell/leaves';

import DeliveryOptionsSelector from 'components/molecules/DeliveryOptionsSelector';

import { MainContainerWrapper } from 'styles/global';
import { ContinueButtonWrapper } from '../styles';
import * as S from './styles';

import { WizardContext } from 'contexts/wizard';

import { US_STATES } from 'utils/constants';
import { isValidPhone, normalizePhone, isValidZipcode } from 'utils/helper';

const PHONE_NUMBER_REGEXP = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const ShipmentStep = ({ moveForward }) => {
  const {
    name,
    address1,
    address2,
    city,
    state,
    zipcode,
    email,
    phone,
    shippingMethodId,
    deliveryOptions,
    setWizard,
  } = useContext(WizardContext);

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    mode: 'onChange',

    defaultValues: {
      name,
      address1,
      address2,
      city,
      state,
      zipcode,
      email,
      phone,
    },
  });

  const watchFields = watch();

  const handleDeliveryOptions = id => {
    setWizard({ shippingMethodId: id });
  };

  const onSubmit = data => {
    setWizard({
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      phone: data.phone,
    });

    moveForward();
  };

  const StateSelectHTML = errors?.state ? S.StateSelectError : S.StateSelect;

  const getPhoneError = () => {
    if (errors.phone) {
      if (errors.phone.message) {
        return errors.phone.message;
      }
      if (errors.phone.type === 'validate') {
        return 'Please enter a valid phone number';
      }
    }
    return '';
  };

  const getZipcodeError = () => {
    if (errors.zipcode) {
      if (errors.zipcode.message) {
        return errors.zipcode.message;
      }
      if (errors.zipcode.type === 'validate') {
        return 'Please enter a valid ZIP Code';
      }
    }
    return '';
  };

  const handlePhoneChange = e => {
    setValue('phone', normalizePhone(e.target.value));
  };

  const onSubmitError = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <MainContainerWrapper>
      <S.PageTitle>Shipping Information</S.PageTitle>
      <S.Subtitle>Tell us where you'd like us to send this test to.</S.Subtitle>
      <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <S.ShippingFormWrapper>
          <S.InputField
            name="name"
            id="name"
            label="Name"
            ref={register({
              required: 'Please enter a valid first name',
            })}
            error={errors?.name?.message}
            disabled
          />

          <S.InputField
            name="address1"
            id="address1"
            label="Address"
            ref={register({
              required: 'Please enter a valid address',
            })}
            error={errors?.address1?.message}
          />

          <S.InputField name="address2" id="address2" ref={register} />

          <S.InputField
            name="city"
            id="city"
            label="City"
            ref={register({
              required: 'Please enter a valid city',
            })}
            error={errors?.city?.message}
          />

          <StateSelectHTML
            items={US_STATES}
            name="state"
            id="state"
            label="State"
            ref={register({
              required: 'Please select a state',
              pattern: {
                value: /^(?!Select State)/,
                message: 'Please select a state',
              },
            })}
          />

          <S.CustomErrorMessage>{errors?.state?.message}</S.CustomErrorMessage>

          <S.InputField
            name="zipcode"
            id="zipcode"
            label="ZIP Code"
            ref={register({
              required: 'Please enter a valid ZIP Code',
              validate: value => isValidZipcode(value),
            })}
            error={getZipcodeError()}
          />
        </S.ShippingFormWrapper>

        {deliveryOptions.length > 1 && (
          <DeliveryOptionsSelector
            options={deliveryOptions}
            onChange={handleDeliveryOptions}
            shippingMethodId={shippingMethodId}
          />
        )}

        <S.ContactFormTitle>Contact Information</S.ContactFormTitle>
        <S.ContactFormSubtitle>Help us track your order.</S.ContactFormSubtitle>

        <S.ContactFormWrapper>
          <S.InputField
            id="email"
            name="email"
            label="Email"
            ref={register({
              required: 'Please enter a valid email',
            })}
            error={errors?.email?.message}
            disabled
          />

          <S.InputField
            id="phone"
            name="phone"
            label="Phone Number (Optional)"
            ref={register({
              validate: value => isValidPhone(value, PHONE_NUMBER_REGEXP),
              required: false,
            })}
            error={getPhoneError()}
            onChange={handlePhoneChange}
          />
        </S.ContactFormWrapper>

        <ContinueButtonWrapper>
          <Button
            hasArrow
            type="submit"
            disabled={
              !watchFields.address1 ||
              !watchFields.city ||
              !watchFields.state ||
              !watchFields.zipcode ||
              (!shippingMethodId && deliveryOptions.length > 1)
            }
          >
            Continue
          </Button>
        </ContinueButtonWrapper>
      </form>
    </MainContainerWrapper>
  );
};

export default ShipmentStep;
