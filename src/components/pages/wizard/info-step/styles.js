import styled from 'styled-components';

import { colors, H2, typography, mediaQueries } from '@everlywell/leaves';

import InfoIcon from 'components/atoms/icons/info';
import { MainContainerWrapper } from 'styles/global';

const Container = styled(MainContainerWrapper)`
  padding: 1.5rem;

  ${mediaQueries.forTabletHorizontalUp} {
    padding: 0 2.5rem;
  }
`;

const Title = styled(H2)`
  text-align: center;
  margin-bottom: 0;
`;

const Description = styled.div`
  ${typography.bodyTextSmall};
  text-align: center;
  color: ${colors.gray4};
`;

const StyledForm = styled.form`
  width: 100%;
`;

const MainForm = styled.div`
  margin-top: 2.75rem;
`;

const InputIconWrapper = styled.div`
  position: relative;
`;

const StyledInfoIcon = styled(InfoIcon)`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0;
  left: 7.5rem;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2.375rem;
  margin-bottom: 3rem;
`;

const AlreadyMember = styled.div`
  font-size: 1rem;
  color: #484848;
`;

const LoginButton = styled.div`
  margin-left: 0.563rem;
  font-size: 1.125rem;
  color: ${colors.green5};
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${colors.green5};
  margin-left: 8px;
`;

export {
  Container,
  Title,
  Description,
  StyledForm,
  MainForm,
  InputIconWrapper,
  StyledInfoIcon,
  Footer,
  AlreadyMember,
  LoginButton,
  Arrow,
};
