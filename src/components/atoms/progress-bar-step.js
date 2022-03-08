import React from "react"
import styled from "styled-components"

import { CheckIcon } from "../icons"

const StepCircle = styled.div`
  color: white;
  width: 18px;
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  background-color: #d6ebdd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.accomplished {
    cursor: pointer;
    background-color: #4ba373;
  }
`

const StepLabel = styled.div`
  position: absolute;
  top: -25px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  text-align: center;
  color: #444850;
  text-transform: capitalize;

  &.accomplished {
    cursor: pointer;
    font-weight: bold;
  }
`

const ProgressBarStep = ({
  accomplished,
  index,
  label,
  currentStep,
  goToStep,
}) => {
  const isStepSuccessfullyCompleted = accomplished && index < currentStep

  const navigationProps = isStepSuccessfullyCompleted
    ? {
        onClick: _event => goToStep(index),
      }
    : {}

  return (
    <>
      <StepLabel
        className={`${accomplished ? "accomplished" : null}`}
        {...navigationProps}
      >
        {label}
      </StepLabel>
      <StepCircle
        className={`${accomplished ? "accomplished" : null}`}
        {...navigationProps}
      >
        {isStepSuccessfullyCompleted ? <CheckIcon /> : index + 1}
      </StepCircle>
    </>
  )
}

export default ProgressBarStep
