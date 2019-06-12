import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Headroom from "react-headroom"

import Nav from "./nav"
import logo from "../images/canterbury-flower-club-logo.svg"

const HeaderHolder = styled.header`
  background: linear-gradient(90˝deg, #fffee6 0%, #fffefa 100%);
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`

const LogoHolder = styled.img`
  width: 20vw;
`

const Header = () => (
  <Headroom>
    <HeaderHolder>
      <Link to="/">
        <LogoHolder src={logo} alt="Canterbury Flower Club logo" />
      </Link>
      <Nav />
    </HeaderHolder>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
