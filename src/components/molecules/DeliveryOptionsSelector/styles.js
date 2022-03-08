import styled from 'styled-components';

import { colors, size, typography, H4 } from '@everlywell/leaves';

const Wrapper = styled.div`
  margin-top: ${size.xl2}px;
`;

const Title = styled(H4)`
  margin-bottom: ${size.xs3}px;
  etter-spacing: 0.47px;
  padding-top: 5px;
  line-height: 1.4;
`;

const Description = styled.div`
  margin-top: 14px;
  padding-right: 1px;
  ${typography.bodyTextSmall};
  margin-bottom: ${size.sm}px;
  line-height: 1.75;
  letter-spacing: normal;

  ${mediaQuery => mediaQuery.theme.forTabletHorizontalUp} {
    margin-top: 0;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery => mediaQuery.theme.forTabletHorizontalUp} {
    flex-direction: row;
  }
`;

const OptionTitle = styled.div`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.27px;
  color: ${colors.gray5};
  padding-top: 2px;
`;

const OptionDescription = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  color: ${colors.gray4};

  ${mediaQuery => mediaQuery.theme.forTabletHorizontalUp} {
    margin-left: ${size.xs1}px;
  }
`;

export {
  Wrapper,
  Title,
  Description,
  OptionWrapper,
  OptionTitle,
  OptionDescription,
};
