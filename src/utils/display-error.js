import React from 'react';
import Toast from 'src/components/molecules/popup/toast';
import { toast } from 'react-toastify';

const displayError = (title, content) => {
  toast(<Toast title={title} content={content} />, {
    position: toast.POSITION.TOP_CENTER,
    type: 'error',
  });
};

export default displayError;
