import styled from 'styled-components';

import { colors, size } from '@everlywell/leaves';

const Container = styled.div`
  box-shadow: 0 1.5px 10px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px ${colors.green2};
`;

const OptionWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.green2};
  font-weight: normal;

  &:last-child {
    border-bottom: none;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  margin: 0;

  :not(:checked) + div span {
    box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.1);
    border: solid 1px rgba(113, 172, 133, 0.5);
    div {
      border-color: ${colors.white};
      background-color: ${colors.white};
    }
  }
`;

const Option = styled.div`
  display: flex;
  padding: 15px;
`;

const OptionButton = styled.span`
  width: 27px;
  height: 27px;
  border-radius: 15px;
  border: solid 1px ${colors.green4};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 13px;
  background-color: ${colors.green5};
`;

const OptionLabel = styled.div`
  margin-left: ${size.xs1}px;
`;

export {
  Container,
  OptionWrapper,
  Input,
  Option,
  OptionButton,
  Circle,
  OptionLabel,
};
