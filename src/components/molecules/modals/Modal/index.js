import React from 'react';

import * as S from './styles';

const Modal = ({ show, handleClose, children, style, className }) => {
  return (
    <S.StyledModal
      isOpen={show}
      contentLabel="Example Modal"
      width="60%"
      ariaHideApp={false}
      onRequestClose={handleClose}
      shouldReturnFocusAfterClose={false}
      style={style}
      className={className}
    >
      <S.StyledIconClose onClick={handleClose} />
      {children}
    </S.StyledModal>
  );
};

export default Modal;
