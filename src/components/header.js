import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Nav from "./nav"
import logo from "../images/canterbury-flower-club-logo.svg"

const HeaderHolder = styled.header`
  background: linear-gradient(90˝deg, #fffee6 0%, #fffefa 100%);
  display: flex;
  justify-content: space-between;
  padding: 1rem 9vw;
`

const LogoHolder = styled.img`
  width: 20vw;
  @media (max-width: 900px) {
    width: 25vw;
  }
`

const Header = () => (
  <HeaderHolder>
    <Link to="/">
      <LogoHolder src={logo} alt="Canterbury Flower Club logo" />
    </Link>
    <Nav />
  </HeaderHolder>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
