import styled from 'styled-components';
import {
  colors,
  size,
  typography,
  H2,
  H3,
  Container,
  Button,
  mediaQueries,
} from '@everlywell/leaves';

const HomePageInfoWrapper = styled.div`
  display: block;
`;

const HowItWorksWrapper = styled(Container)`
  margin-bottom: 40px;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-bottom: ${size.xl7}px;
  }
`;

const SectionLabel = styled.div`
  ${typography.overlineText};
  margin-bottom: ${size.xs1}px;
  text-align: center;
`;

const SectionTitle = styled(H3)`
  text-align: center;
  margin-bottom: ${size.xl1}px;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-bottom: ${size.xl4}px;
  }
`;

const SectionTitleLarge = styled(H2)`
  text-align: center;
  margin-bottom: ${size.xl1}px;
`;

const HowItWorksStepsList = styled.ul`
  ${mediaQueries.forTabletHorizontalUp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  li {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: ${size.lg}px;
    padding-right: ${size.lg}px;

    &:last-child {
      padding-right: 0;
    }
  }

  img {
    height: 56px;
    width: 56px;
  }

  .details {
    margin-left: ${size.md}px;
    max-width: 322px;
  }

  .name {
    margin-bottom: ${size.xs2}px;
    ${typography.subtitle};
  }

  .description {
    ${typography.bodyTextSmall};
  }
`;

const WhatToExpectWrapper = styled.div`
  background-color: ${colors.teal1};
  padding: ${size.xl4}px 0 ${size.xl2}px;

  ${mediaQueries.forTabletHorizontalUp} {
    padding-bottom: ${size.xl5}px;
  }
`;

const WhatToExpectContainer = styled(Container)`
  text-align: center;
`;

const WTEStepsList = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: ${size.xl2};
    align-items: center;
    justify-content: center;
  }

  img {
    height: 160px;
    width: 160px;
  }

  .details {
    margin: ${size.md}px 0 ${size.xl2}px;

    ${mediaQueries.forTabletHorizontalUp} {
      margin: 0 0 0 ${size.xl1}px;
      max-width: 347px;
    }
  }

  .name {
    ${typography.subtitle};
    margin-bottom: ${size.xs3}px;
    text-align: center;
  }

  .description {
    ${typography.bodyTextSmall};
    text-align: center;
  }

  ${mediaQueries.forTabletHorizontalUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${size.xl2}px;
    grid-row-gap: ${size.xl4}px;
    margin-bottom: ${size.xl2}px;

    li {
      flex-direction: row;
    }

    .details {
      margin: 0 0 0 ${size.xl1}px;
    }

    .name,
    .description {
      text-align: left;
    }
  }
`;

const ScienceButton = styled(Button)`
  display: block;
  width: 100%;

  ${mediaQueries.forTabletHorizontalUp} {
    width: auto;
    margin: 0 auto;
  }
`;

export {
  HomePageInfoWrapper,
  HowItWorksWrapper,
  SectionLabel,
  SectionTitle,
  SectionTitleLarge,
  HowItWorksStepsList,
  WhatToExpectWrapper,
  WhatToExpectContainer,
  WTEStepsList,
  ScienceButton,
};
