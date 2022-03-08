import styled from 'styled-components';

import { colors, mediaQueries } from '@everlywell/leaves';

const Text = styled.div`
  font-size: 1rem;
  color: ${colors.gray4};
`;

const CenterText = styled(Text)`
  text-align: center;
`;

const SignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQueries.forTabletHorizontalUp} {
    flex-direction: row;
  }
`;

const SignRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const SignLink = styled.div`
  margin-right: 0.375rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${colors.green5};
  cursor: pointer;
`;

export { CenterText, SignWrapper, SignRow, SignLink };
