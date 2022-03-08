import Img from 'gatsby-image';
import styled from 'styled-components';

import {
  Accordion,
  colors,
  H2,
  size,
  mediaQueries,
  typography,
} from '@everlywell/leaves';
import { ContinueButtonWrapper as StyledContinuedButtonWrapper } from '../styles';

const Greeting = styled(H2)`
  text-align: center;
  margin: 0;

  ${mediaQueries.forTabletHorizontalUp} {
    padding: 0;
  }
`;

const Description = styled.p`
  ${typography.bodyTextSmall}
  text-align: center;
  margin: 0 0 2.5rem;

  ${mediaQueries.forTabletHorizontalUp} {
    font-size: 1.125rem;
    line-height: 1.78;
    margin: 0 1.5rem 3.5rem;

    padding: 0;
  }
`;

const AvailableTestsTitle = styled.div`
  font-size: 0.889rem;
  font-weight: bold;
  line-height: 1.13;
  letter-spacing: 3.16px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.green5};
  margin-bottom: 0.75rem;
`;

const AvailableTestsMessage = styled.div`
  font-size: 1.424rem;
  font-weight: normal;
  line-height: 1.4;
  letter-spacing: 0.47px;
  text-align: center;
  color: ${colors.teal6};
  margin-bottom: 1.812rem;

  ${mediaQueries.forTabletHorizontalUp} {
    letter-spacing: 1px;
    margin-bottom: 3.313rem;

    padding: 0;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;

  ${mediaQueries.forTabletHorizontalUp} {
    flex-direction: row;
    align-items: flex-start;

    padding: 0;
  }
`;

const ProductImageWrapper = styled.div`
  margin: 0 0 0.875rem 0;

  ${mediaQueries.forTabletHorizontalUp} {
    margin: 0 2rem 0 0;
  }
`;

const ProductImage = styled(Img)`
  width: 20.438rem;
  height: 20.438rem;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 15rem;
    height: 15rem;
  }
`;

const ProductInfoWrapper = styled.div`
  ${mediaQueries.forTabletHorizontalUp} {
    width: 50%;
  }
`;

const ProductTitle = styled.div`
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: 0.45px;
  color: #2d2d2d;

  margin-bottom: 0.188rem;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const ProductDescription = styled.div``;

const ProductTruncatedDescription = styled.div`
  ${typography.bodyTextSmall}
  margin-bottom: 0.5rem;
`;

const ProductDescriptionToggle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.27px;
  color: ${colors.green5};
  cursor: pointer;
`;

const AccordionItemWrapper = styled.div`
  border-top: ${props => (!!props.hasBorderTop ? '1px solid #d8d8d8' : 'none')};
  border-bottom: 1px solid #d8d8d8;
  padding: 0;

  margin-left: -24px;
  margin-right: -24px;
  padding-right: 1.25rem;
  padding-left: 1.75rem;

  ${mediaQueries.forTabletHorizontalUp} {
    padding: 0 1.5rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const AccordionHeading = styled(Accordion.Heading)`
  outline: none;
  color: ${colors.green5} !important;
  height: 3.563rem;
  font-size: 1.125rem;
  line-height: 1.33;
  letter-spacing: 0.3px;
`;

const SymptomsList = styled.div`
  ${typography.bodyTextSmall}
  padding-bottom: 0.625rem;

  ul {
    list-style: none;
    list-style-position: outside;
    margin-bottom: 2rem;
    margin-left: 0;
    padding-left: 0;

    li > ul {
      li {
        margin-left: 1.25rem;
        margin-bottom: 0.625rem;

        p {
          display: inline;
        }

        &:before {
          content: '•';
          color: ${colors.green5};
          display: inline;
          width: 1em;
          margin-left: -0.812rem;
          margin-right: 0.375rem;
        }
      }
    }
  }

  ${mediaQueries.forTabletHorizontalUp} {
    ul {
      padding-left: 0.812rem;

      li > ul {
        li {
          margin-left: 0.812rem;
        }
      }
    }
  }
`;

const MarkerWrapper = styled.div`
  padding-bottom: ${size.xl1}px;

  font-size: 1rem;
  font-weight: normal;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-left: 0.812rem;
  }
`;

const MarkerTitle = styled.div`
  line-height: 1.5;
  letter-spacing: 0.27px;
  color: ${colors.gray5};
  margin-bottom: 0.25rem;
`;

const MarkerDescription = styled.div`
  line-height: 1.75;
  letter-spacing: normal;
  color: ${colors.gray4};
`;

const ZeroState = styled.div`
  min-height: 25rem;

  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: center;
  color: ${colors.gray4};
`;

const ContinueButtonWrapper = styled(StyledContinuedButtonWrapper)`
  ${mediaQueries.forTabletHorizontalUp} {
    padding: 0;
  }
`;

export {
  Greeting,
  Description,
  AvailableTestsTitle,
  AvailableTestsMessage,
  ProductWrapper,
  ProductImageWrapper,
  ProductInfoWrapper,
  ProductTitle,
  ProductDescription,
  ProductTruncatedDescription,
  ProductDescriptionToggle,
  ProductImage,
  AccordionItemWrapper,
  AccordionHeading,
  MarkerWrapper,
  MarkerTitle,
  MarkerDescription,
  SymptomsList,
  ZeroState,
  ContinueButtonWrapper,
};
