import React from 'react';
import styled from 'styled-components';

import { colors, size, typography } from '@everlywell/leaves';

import { ErrorIcon } from 'components/icons';

const Container = styled.div`
  border-color: ${colors.red3};
  font-size: 16px;
  color: ${colors.gray4};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: ${typography.type.nexa};
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.27px;
  color: ${colors.gray5};
  margin-left: 12px;
`;

const Content = styled.div`
  font-family: ${typography.type.nexa};
  font-size: 14.2px;
  font-weight: normal;
  line-height: 1.55;
  letter-spacing: 0.5px;
  color: ${colors.gray4};
  padding: ${size.xs3}px 36px 6px;
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  width: 21px;
  height: 21px;
  background-color: #c6394c;
`;

const Toast = ({ title, content }) => {
  return (
    <Container>
      <Row>
        <IconWrapper>
          <ErrorIcon />
        </IconWrapper>
        <Title>{title}</Title>
      </Row>
      <Content>{content}</Content>
    </Container>
  );
};

export default Toast;
