import React from 'react';
import * as S from './styles';

import { APP_ROOT } from 'utils/constants';

const collectIcon = require('./images/collect.svg');
const recieveIcon = require('./images/recieve.svg');
const orderIcon = require('./images/order.svg');

const HowItWorksSteps = [
  {
    icon: orderIcon,
    name: 'Request your test kit',
    description:
      'The test kit materials will be delivered right to your doorstep and includes pre-paid expedited shipping to send your sample to the lab.',
  },
  {
    icon: collectIcon,
    name: 'Collect your sample',
    description:
      'Once you register your test, a board-certified physician reviews and approves your test order. Collect your sample and drop it in the mail.',
  },
  {
    icon: recieveIcon,
    name: 'Receive results in days',
    description:
      'Digital results and insights will be available on our secure platform within days.  Easily share your results with your doctor or family members.',
  },
];

const WTESteps = [
  {
    icon:
      'https://images.ctfassets.net/lrd5ir86ur94/4RfKkrpshTAOxSGRrWjJcP/fba107e60ae46cc6d81f5c7a060fb702/group_2x.png?w=414&q=100',
    name: 'Effective, well-established collection methods',
    description:
      'Our at-home collection methods are backed by science and meet rigorous standards for reliability, stability, and validity.',
  },
  {
    icon:
      'https://images.ctfassets.net/lrd5ir86ur94/47NesIzX9a1YpEi996GI05/fe981b2cf447c98783cbe1a7f4826538/image_2x.png?w=414&q=100',
    name: 'Convenient at-home sample collection',
    description:
      'We’ve helped over half a million people get tested with the same quality, excellence, and commitment to accuracy you would expect, all from home.',
  },
  {
    icon:
      'https://images.ctfassets.net/lrd5ir86ur94/2e7TwyDBpvK2j4SnufW49o/be09a4e02cd3620185c05312c35b1aa1/group_2x.png?w=414&q=100',
    name: 'Results reviewed by independent physicians',
    description:
      'All lab test results come from CLIA-certified labs and are reviewed by an independent physician within days of the lab receiving your sample. ',
  },
  {
    icon:
      'https://images.ctfassets.net/lrd5ir86ur94/6Y4hdZrCjGY25ujIozL4Uc/74a2761f567c43440d94d65bad5e0727/group_2x.png?w=414&q=100',
    name: 'Easy to understand digital results and actionable insights',
    description:
      'Our tests put you in control and provide personalized results with meaningful insights to help you take action.',
  },
];

const getSteps = (data: any, showStepNumber: boolean) => {
  return data.map((step, index) => {
    const stepNum = showStepNumber ? `${index + 1}. ` : '';

    return (
      <li key={index}>
        <img alt="" src={step.icon} />
        <div className="details">
          <div className="name">
            {stepNum}
            {step.name}
          </div>
          <div className="description">{step.description}</div>
        </div>
      </li>
    );
  });
};

const HomePageInfo = () => (
  <S.HomePageInfoWrapper>
    <S.HowItWorksWrapper>
      <S.SectionLabel>How It Works</S.SectionLabel>
      <S.SectionTitle>At-home Lab Testing Centered Around You</S.SectionTitle>
      <S.HowItWorksStepsList>
        {getSteps(HowItWorksSteps, true)}
      </S.HowItWorksStepsList>
    </S.HowItWorksWrapper>
    <S.WhatToExpectWrapper>
      <S.WhatToExpectContainer>
        <S.SectionLabel>What To Expect</S.SectionLabel>
        <S.SectionTitleLarge>
          Best in class science that puts you in control
        </S.SectionTitleLarge>
        <S.WTEStepsList>{getSteps(WTESteps, false)}</S.WTEStepsList>
        <S.ScienceButton
          appearance="secondary"
          hasArrow
          href={`${APP_ROOT}/science/`}
        >
          Learn The Science
        </S.ScienceButton>
      </S.WhatToExpectContainer>
    </S.WhatToExpectWrapper>
  </S.HomePageInfoWrapper>
);

export default HomePageInfo;
