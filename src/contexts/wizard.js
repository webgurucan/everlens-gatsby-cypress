import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

export const WizardContext = React.createContext();

export const WizardProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const shippingMethods = location?.state?.shippingMethods || [];
    const selectedId =
      shippingMethods.length === 1 ? shippingMethods[0].id : null;

    const enterpriseClientId = location?.state?.enterprise_client_id;

    setWizard({
      deliveryOptions: shippingMethods,
      shippingMethodId: selectedId,
      enterprise_client_id: enterpriseClientId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [wizardState, setWizardState] = useState({
    // Personal Information step
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    userId: '',
    userConfirmId: '',
    userIdLabel: '',

    // Shipping Information step
    address1: '',
    address2: '',
    city: '',
    state: 'Select State',
    zipcode: '',
    phone: '',
    shippingMethodId: null,
    deliveryOptions: [],

    // Order Placement
    orderNumber: '',
    orderEmail: '',

    // Quota
    isQuotaFull: false,
    enterpriseClientId: '',
  });

  const name = `${wizardState.firstName} ${wizardState.lastName}`;

  const setWizard = wizardData => {
    setWizardState({ ...wizardState, ...wizardData });
  };

  return (
    <WizardContext.Provider
      value={{
        ...wizardState,
        name,
        setWizard,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};
