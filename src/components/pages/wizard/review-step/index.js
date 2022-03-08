import React, { useContext, useState } from 'react';

import { WizardContext } from 'contexts/wizard';

import { trim } from 'utils';
import { normalizePhone, formatDateOfBirth } from 'utils/helper';
import { ERROR_TITLE, ERROR_CONTENT } from 'utils/constants';
import displayError from 'utils/display-error';

import apiOrder from 'api/order-placement';
import { getUser } from 'services/auth';

import { MainContainerWrapper } from 'styles/global';
import { ContinueButtonWrapper, Button } from '../styles';
import * as S from './styles';

const getAddress = (address1, address2) => {
  let address = '';
  if (address1) {
    address = address1;
    if (address2) {
      address += ', ' + address2;
    }
  } else {
    address = address2;
  }
  return address;
};

const ReviewStep = ({
  products,
  productIds,
  moveForward,
  goToPreviousStep,
}) => {
  const [isOrderBeingPlaced, setIsOrderBeingPlaced] = useState(false);

  const {
    // Personal Information step
    firstName,
    lastName,
    userId,
    userIdLabel,
    birthday,

    // Shipping Information step
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

    // Enterprise Client Info
    enterprise_client_id,

    setWizard,
  } = useContext(WizardContext);

  const address = getAddress(address1, address2);

  const deliveryOption = deliveryOptions.find(
    option => option.id === shippingMethodId,
  );

  const handleError = error => {
    let [title, content] = [ERROR_TITLE.DEFAULT, ERROR_CONTENT.DEFAULT];

    if (error?.response?.data?.errors) {
      const errors = Array.from(error.response.data.errors);
      if (errors.some(el => el.includes('Birthday is invalid'))) {
        [title, content] = [ERROR_TITLE.DOB, ERROR_CONTENT.DOB];
      }
    }

    return displayError(title, content);
  };

  const handleOrder = () => {
    setIsOrderBeingPlaced(true);

    const payload = {
      enterprise_partner_id: process.env.GATSBY_ENTERPRISE_PARTNER_ID,
      enterprise_client_id,
      access_code: getUser().accessCode,

      email,

      line_items: productIds.map(id => ({ product_id: id, quantity: 1 })),

      ship_address: {
        firstname: trim(firstName),
        lastname: trim(lastName),
        address1: trim(address1),
        address2: trim(address2),
        city: trim(city),
        state: trim(state),
        zipcode: trim(zipcode),
        country: 'US',
        phone,
      },

      shipping_method_id: shippingMethodId,

      user_id: '',
      third_party_member_id: userId,
      auto_register: false,

      user: {
        dob: formatDateOfBirth(birthday),
      },
    };

    apiOrder(payload)
      .then(response => {
        if (response?.data?.number) {
          setWizard({
            orderNumber: response.data.number,
            orderEmail: response.data.email,
          });

          moveForward();
        }
      })
      .catch(_error => {
        handleError(_error);
      })
      .finally(() => {
        setIsOrderBeingPlaced(false);
      });
  };

  return (
    <MainContainerWrapper>
      <S.Title>Review Order</S.Title>

      <S.ReviewWrapper>
        {/* Personal Information */}
        <S.H2>Personal Information</S.H2>
        <S.Row>
          <S.Label>Name</S.Label>
          <S.LabelText>{`${firstName} ${lastName}`}</S.LabelText>
        </S.Row>
        <S.Row>
          <S.Label>Date of Birth</S.Label>
          <S.LabelText>{birthday}</S.LabelText>
        </S.Row>
        <S.Row>
          <S.Label>Email</S.Label>
          <S.LabelText>{email}</S.LabelText>
        </S.Row>
        {userId && (
          <S.Row>
            <S.Label>{userIdLabel}</S.Label>
            <S.LabelText>{userId}</S.LabelText>
          </S.Row>
        )}
        {phone && (
          <S.Row>
            <S.Label>Phone</S.Label>
            <S.LabelText>{normalizePhone(phone)}</S.LabelText>
          </S.Row>
        )}

        {/* Items in the order */}
        <S.H2>Items in the order</S.H2>
        {products.map((product, index) => (
          <S.Row key={index}>
            <S.Text>{product?.displayName}</S.Text>
          </S.Row>
        ))}

        {/* Ships to */}
        <S.LinkWrapper>
          <S.ShipsH2>Ships to</S.ShipsH2>
          <S.ChangeLink onClick={goToPreviousStep}>Change</S.ChangeLink>
        </S.LinkWrapper>
        <S.Row>
          <S.Text>{name}</S.Text>
        </S.Row>
        <S.Row>
          <S.Text>{address}</S.Text>
        </S.Row>
        <S.Row>
          <S.Text>
            {city}, {state} {zipcode}
          </S.Text>
        </S.Row>

        <S.DeliveryRow>
          <S.Label>Delivery</S.Label>
          <S.LabelText>{deliveryOption.name}</S.LabelText>
        </S.DeliveryRow>
      </S.ReviewWrapper>
      <ContinueButtonWrapper>
        <Button
          onClick={handleOrder}
          disabled={isOrderBeingPlaced}
          isLoading={isOrderBeingPlaced}
        >
          Place Order
        </Button>
      </ContinueButtonWrapper>
    </MainContainerWrapper>
  );
};

export default ReviewStep;
