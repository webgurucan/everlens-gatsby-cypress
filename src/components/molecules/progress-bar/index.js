import React from "react"
import { ProgressBar, Step } from "react-step-progress-bar"
import styled from "styled-components"

import { ProgressBarStep } from "../../atoms"

import "./style.css"

const Wrapper = styled.div`
  margin: 4.5rem auto 0;
  max-width: 18rem;
  height: 2.938rem;
`

const WizardProgressBar = ({ steps, currentStep, goToStep }) => {
  const stepCount = 100 / (steps.length - 1)
  const percent = currentStep > 0 ? currentStep * stepCount : currentStep

  return (
    <Wrapper>
      <ProgressBar percent={percent}>
        {steps.map(step => (
          <Step key={step}>
            {({ accomplished, index }) => (
              <ProgressBarStep
                index={index}
                label={step}
                accomplished={accomplished}
                currentStep={currentStep}
                goToStep={goToStep}
              />
            )}
          </Step>
        ))}
      </ProgressBar>
    </Wrapper>
  )
}

export default WizardProgressBar
