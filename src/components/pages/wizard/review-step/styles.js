import styled from 'styled-components';

import { colors, size } from '@everlywell/leaves';

import CreateAccount from './create-account';

const Title = styled.div`
  text-align: center;
  font-size: 2.027rem;
  line-height: 1.48;
  letter-spacing: -0.18px;
  color: ${colors.teal6};

  ${mediaQuery => mediaQuery.theme.forTabletHorizontalUp} {
    font-size: 2.566rem;
    line-height: 1.36;
    letter-spacing: 0.51px;
  }
`;

const ReviewWrapper = styled.div`
  margin-top: 0.5rem;

  ${mediaQuery => mediaQuery.theme.forTabletHorizontalUp} {
    margin-top: 0.25rem;
  }
`;

const H2 = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.27px;
  color: ${colors.gray5};
`;

const Row = styled.div`
  margin-top: 0.125rem;
`;

const DeliveryRow = styled(Row)`
  margin-top: ${size.sm}px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${colors.gray4};
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  color: ${colors.gray4};
`;

const LabelText = styled(Text)`
  margin-left: 0.5rem;
  font-weight: normal;
  color: ${colors.gray4};
`;

const LinkWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
`;

const ShipsH2 = styled.span`
  font-size: 16px;
  color: ${colors.gray5};
`;

const ChangeLink = styled.div`
  float: right;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.green5};
  cursor: pointer;
`;

const StyledCreateAccount = styled(CreateAccount)`
  margin-top: 2rem;
`;

export {
  Title,
  ReviewWrapper,
  H2,
  Row,
  DeliveryRow,
  Label,
  Text,
  LabelText,
  LinkWrapper,
  ShipsH2,
  ChangeLink,
  StyledCreateAccount,
};
