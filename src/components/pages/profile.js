import React from "react"
import { navigate } from "gatsby"

import { H3, H5, Button } from "@everlywell/leaves"

import { getUser, logout } from "../../services/auth"

const Profile = () => {
  const handleBackButtonClick = () => {
    logout()
    navigate("/")
  }

  const user = getUser()

  return (
    <>
      <H3>Here is a private page</H3>
      <H5>Access Code: {user?.accessCode}</H5>

      <Button appearance="primary" onClick={handleBackButtonClick}>
        Back
      </Button>
    </>
  )
}

export default Profile
