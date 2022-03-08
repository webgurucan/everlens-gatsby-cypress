import styled from 'styled-components';
import {
  typography,
  colors,
  size,
  H2,
  H4,
  Dropdown,
  Input,
  mediaQueries,
} from '@everlywell/leaves';

const PageTitle = styled(H2)`
  width: 100%;
  margin-bottom: 0;
  text-align: center;
`;

const Subtitle = styled.div`
  ${typography.bodyTextSmall};
  color: ${colors.gray4};
  margin-bottom: ${size.xl1}px;
  text-align: center;
  padding: 0 5px;
`;

const InputField = styled(Input)`
  input[type='text'] {
    height: 48px;
    box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.1);
    border: solid 1px ${colors.green2};
    background-color: ${colors.white};

    &:disabled {
      -webkit-text-fill-color: ${colors.gray3};
    }
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: ${size.xs3}px;
  }
`;

const ShippingFormWrapper = styled.div`
  display: block;
`;

const StateSelect = styled(Dropdown)`
  select[name='state'] {
    box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.1);
    border: solid 1px ${colors.green2};
    background-color: ${colors.white};
    width: 100%;
    margin-bottom: 20px;
    font-family: inherit;
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: ${size.xs3}px;
  }
`;

const StateSelectError = styled(Dropdown)`
  select[name='state'] {
    box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.1);
    border: solid 1px ${colors.green2};
    background-color: ${colors.white};
    width: 100%;
    margin-bottom: 5px;
  }

  label {
    color: #cf5b6b;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: ${size.xs3}px;
  }
`;

const ContactFormTitle = styled(H4)`
  margin-bottom: 0;
  margin-top: ${size.xl2}px;
`;

const ContactFormSubtitle = styled.div`
  ${typography.bodyTextSmall};
  margin-bottom: ${size.md}px;
`;

const ContactFormWrapper = styled.div`
  display: block;
`;

const CustomErrorMessage = styled.div`
  margin-bottom: 5px;
  color: #cf5b6b;
`;

const Row = styled.label`
  display: flex;
  align-items: start;
  margin-bottom: ${size.xl1}px;
  margin-left: -0.5rem;
  cursor: pointer;

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 1.5rem;
    margin-bottom: 2.563rem;
  }
`;

const CheckText = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding-top: 0.75rem;
  font-size: 1rem;
  line-height: 1.75;
  color: ${colors.gray4};

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 0;
  }
`;

export {
  PageTitle,
  Subtitle,
  InputField,
  ShippingFormWrapper,
  ContactFormWrapper,
  ContactFormTitle,
  ContactFormSubtitle,
  StateSelect,
  StateSelectError,
  CustomErrorMessage,
  Row,
  CheckText,
};
