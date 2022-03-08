import styled from 'styled-components';

import { colors, mediaQueries } from '@everlywell/leaves';

const idPlaceholder = require('images/id-graphic-placeholder.png');
const idPlaceholderMobile = require('images/id-graphic-placeholder-mobile.png');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.938rem 1rem;

  ${mediaQueries.forTabletHorizontalUp} {
    padding: 2rem 3rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  color: #2d2d2d;
`;

const Description = styled.div`
  margin-top: 0.375rem;
  font-size: 1rem;
  color: ${colors.gray4};
`;

const Badge = styled.div`
  width: 17.438rem;
  height: 15.75rem;
  background-image: url(${idPlaceholderMobile});
  background-size: cover;
  margin-top: 1.563rem;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 9.688rem;
    align-self: center;
    background-image: url(${idPlaceholder});
    margin-top: 3.813rem;
  }
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  bottom: 5rem;
  left: calc(50% + 3rem);

  ${mediaQueries.forTabletHorizontalUp} {
    display: flex;
  }
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 10px solid ${colors.green5};
  margin-left: 8px;
`;

const Line = styled.div`
  width: 2.438rem;
  height: 0.063rem;
  background: ${colors.green5};
`;

const Label = styled.div`
  margin-left: 0.438rem;
  font-size: 1rem;
  color: ${colors.gray4};
`;

export {
  Container,
  Title,
  Description,
  Badge,
  IndicatorWrapper,
  Arrow,
  Line,
  Label,
};
