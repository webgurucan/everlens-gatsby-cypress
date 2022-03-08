import styled from 'styled-components';

import { size, colors, mediaQueries } from '@everlywell/leaves';
import {
  OuterWrapper as BaseOuterWrapper,
  InnerWrapper,
} from 'components/pages/wizard/styles';
const OuterWrapper = styled(BaseOuterWrapper)`
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.469rem;
  margin-bottom: ${size.xs1}px;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 3.563rem;
    margin-bottom: ${size.md}px;
  }
`;

const HeaderIconWrapper = styled.div`
  margin-top: 1.375rem;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 0.813rem;
  }
`;

const OrderNumberWrapper = styled.div`
  margin-bottom: ${size.xl1}px;
  text-align: center;
`;

const OrderNumberLabel = styled.div`
  height: 28px;
  font-size: 1rem;
  line-height: 1.75;
  color: ${colors.gray4};
`;

const OrderNumberValue = styled.div`
  height: 24px;
  font-size: 1.125rem;
  line-height: 1.33;
  letter-spacing: 0.45px;
  color: ${colors.gray5};
`;

const HintWrapper = styled.p`
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.26px;
  color: #222222;
  margin-bottom: 20px;
`;

const Email = styled.a`
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.26px;
  color: #222222 !important;
  margin-bottom: 20px;
  text-decoration: none;
  color: #222222;
`;

export {
  OuterWrapper,
  InnerWrapper,
  Header,
  HeaderIconWrapper,
  OrderNumberWrapper,
  OrderNumberLabel,
  OrderNumberValue,
  HintWrapper,
  Email,
};
