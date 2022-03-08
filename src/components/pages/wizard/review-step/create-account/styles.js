import styled from 'styled-components';

import { colors, size, mediaQueries } from '@everlywell/leaves';

const Container = styled.div``;

const Inputs = styled.div``;

const PasswordWrapper = styled.div`
  position: relative;
`;

const Lines = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 2.75rem;
  display: flex;
`;

const Line = styled.div`
  width: 0.188rem;
  height: 0.75rem;
  margin: 0 0.1rem;
  border-radius: 5px;
  background: ${colors.green5};
`;

const GrayLine = styled(Line)`
  background: ${colors.gray2};
`;

const Row = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${size.xl1}px;
  margin-left: -0.5rem;
  cursor: pointer;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 1.5rem;
    margin-bottom: 2.563rem;
  }
`;

const Terms = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 0;
  }
`;

const Text = styled.span`
  font-size: 1rem;
  line-height: 1.75;
  color: ${colors.gray4};
`;

const Link = styled.a`
  font-size: 1rem;
  line-height: 1.75;
  color: ${colors.green5};
  cursor: pointer;
`;

export {
  Container,
  Inputs,
  PasswordWrapper,
  Lines,
  Line,
  GrayLine,
  Row,
  Terms,
  Text,
  Link,
};
