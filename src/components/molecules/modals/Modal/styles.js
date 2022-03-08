import styled from 'styled-components';
import Modal from 'react-modal';

import { colors, size, mediaQueries } from '@everlywell/leaves';

import IconClose from 'components/atoms/icons/modal-close';

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border: solid 1px ${colors.green1};
  border-radius: 4px;
  box-shadow: 0 2px 30px -5px rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0);
  overflow: auto;
  border-radius: 4px;
  outline: currentcolor none medium;
  padding: 0px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 86%;

  ${mediaQueries.forTabletHorizontalUp} {
    width: 43.75rem;
    width: 40%;
  }
`;

const StyledIconClose = styled(IconClose)`
  position: absolute;
  top: ${size.lg}px;
  right: ${size.lg}px;
  cursor: pointer;

  ${mediaQueries.forTabletHorizontalUp} {
    top: 1.25rem;
    right: 1.25rem;
  }
`;

export { StyledModal, StyledIconClose };
