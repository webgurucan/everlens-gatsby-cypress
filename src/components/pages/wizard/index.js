import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import ReactGA from 'react-ga';

import ProgressBar from '../../molecules/progress-bar';

import { useFindManyProducts, useStep } from '../../../hooks';

import { OuterWrapper, InnerWrapper } from './styles';
import InfoStep from './info-step';
import TestsStep from './tests-step';
import ShipmentStep from './shipment-step';
import ReviewStep from './review-step';
import { setInnerNavigate } from '../../../services/auth';

const steps = ['info', 'tests', 'shipment', 'review'];

const Wizard = () => {
  const location = useLocation();

  const productIds = location?.state?.productIds || [];
  const contentfulProductIds = location?.state?.contentfulProductIds || [];
  const uniqueId = location?.state?.uniqueId || {};
  const products = useFindManyProducts({ productIds: contentfulProductIds });

  const {
    currentStep,
    navigation: { goToNextStep, goToPreviousStep, goToStep },
    hasNextStep,
    isLastStep,
  } = useStep({ steps });

  const moveForward = _event => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (hasNextStep) {
      goToNextStep();
    }

    if (isLastStep) {
      setInnerNavigate();
      navigate('/app/order-placed');
    }
  };

  const pageviews = ['personal_info', 'tests', 'shipping_info', 'review'];
  ReactGA.pageview(pageviews[currentStep]);

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ProgressBar
          currentStep={currentStep}
          steps={steps}
          goToStep={goToStep}
        />

        {
          {
            0: <InfoStep moveForward={moveForward} uniqueId={uniqueId} />,
            1: <TestsStep products={products} moveForward={moveForward} />,
            2: <ShipmentStep moveForward={moveForward} />,
            3: (
              <ReviewStep
                products={products}
                productIds={productIds}
                moveForward={moveForward}
                goToPreviousStep={goToPreviousStep}
              />
            ),
          }[currentStep]
        }
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Wizard;
