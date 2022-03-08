import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga';

import { OrderPlaced as OrderPlacedIcon } from '../../icons';

import { logout } from '../../../services/auth';

import { H3 } from '@everlywell/leaves';

import * as S from './styles';
import { MainContainerWrapper } from 'styles/global';

import { WizardContext } from 'contexts/wizard';

const HELP_EMAIL_ADDRESS = 'help@everlywell.com';

const OrderPlaced = () => {
  useEffect(() => {
    logout();
  }, []);

  const { orderNumber, orderEmail } = useContext(WizardContext);

  let formattedOrderNumer = ('' + orderNumber).slice(0, 10);

  ReactGA.pageview('order_confirmation');

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <MainContainerWrapper>
          <S.Header>
            <H3>Order is placed</H3>
            <S.HeaderIconWrapper>
              <OrderPlacedIcon />
            </S.HeaderIconWrapper>
          </S.Header>

          <S.OrderNumberWrapper>
            <S.OrderNumberLabel>Order number: </S.OrderNumberLabel>
            <S.OrderNumberValue>{formattedOrderNumer}</S.OrderNumberValue>
          </S.OrderNumberWrapper>

          <S.HintWrapper>
            Your order is now processing. A copy of your order details will be
            sent to {orderEmail}.
          </S.HintWrapper>

          <S.HintWrapper>
            If you have any questions about tracking your shipment or would like
            to update your preferred shipping address, please contact the
            Everlywell Customer Care team at{' '}
            <S.Email href={`mailto:${HELP_EMAIL_ADDRESS}`}>
              {HELP_EMAIL_ADDRESS}
            </S.Email>
            .
          </S.HintWrapper>
        </MainContainerWrapper>
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default OrderPlaced;
