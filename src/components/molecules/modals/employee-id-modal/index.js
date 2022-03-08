import React from "react"

import Modal from "../Modal"
import {
  Container,
  Title,
  Description,
  Badge,
  IndicatorWrapper,
  Arrow,
  Line,
  Label,
} from "./styles"

const EmployeeIdModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} handleClose={handleClose}>
      <Container>
        <Title>Employee ID</Title>
        <Description>
          Your employee ID can be located on our ID badge, below your photo and
          name.
        </Description>
        <Badge />
        <IndicatorWrapper>
          <Arrow />
          <Line />
          <Label>Employee ID</Label>
        </IndicatorWrapper>
      </Container>
    </Modal>
  )
}

export default EmployeeIdModal
