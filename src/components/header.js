import PropTypes from "prop-types"
import React from "react"
import { H1 } from "@everlywell/leaves"

const Header = ({ siteTitle }) => (
  <header>
    <H1>{siteTitle}</H1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
