import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/private-route';

import Profile from '../components/pages/profile';
import Wizard from '../components/pages/wizard';
import OrderPlaced from '../components/pages/order-placed';
import Layout from 'components/layout';
import { WizardProvider } from 'contexts/wizard';

import styled from 'styled-components';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors, size } from '@everlywell/leaves';
import IconClose from 'components/atoms/icons/modal-close';

const StyledToastContainer = styled(ToastContainer)`
  top: 7em;
  transform: unset;
  left: calc(50% - 297px);

  .Toastify__toast {
    width: 594px;
    padding: ${size.sm}px;
    border-radius: 1px;
    box-shadow: 0 2px 20px -5px rgba(170, 169, 172, 0.4);
    background-color: white;

    @media (max-width: 786px) {
      width: 343px;
      left: calc(100% - 60%);
    }
  }

  .Toastify__toast--error {
    border: 1px solid ${colors.red3};

    > svg {
      fill: ${colors.red3};
    }
  }
`;

const App = () => (
  <Layout>
    <StyledToastContainer
      autoClose={2000}
      transition={Slide}
      closeButton={IconClose}
    />
    <WizardProvider>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/wizard" component={Wizard} />
        <PrivateRoute path="/app/order-placed" component={OrderPlaced} />
      </Router>
    </WizardProvider>
  </Layout>
);

export default App;
