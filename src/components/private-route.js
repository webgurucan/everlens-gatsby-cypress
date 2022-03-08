import React from 'react';
import { navigate } from 'gatsby';

import { isInnerNavigate, initInnerNavigate } from '../services/auth';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isInnerNavigate() && location.pathname !== ``) {
    navigate('/');

    return null;
  }

  initInnerNavigate()

  return <Component {...rest} />;
};

export default PrivateRoute;
