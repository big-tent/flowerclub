import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinks = styled.nav`
  a {
    color: #181414;
    margin-left: 2rem;
    text-decoration: none;
    :hover {
      color: #66a824;
    }
    @media (max-width: 900px) {
      margin-left: 1rem;
    }
  }
  display: flex;
  align-items: center;
`
const NavLink = styled(Link)`
  font-size: 2vw;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 2.5vw;
  }
`

const Nav = () => (
  <NavLinks>
    <NavLink to="/" activeStyle={{ color: "#66a824" }}>
      Home
    </NavLink>
    <NavLink to="/events" activeStyle={{ color: "#66a824" }}>
      Events
    </NavLink>
    <NavLink to="/news" activeStyle={{ color: "#66a824" }}>
      News
    </NavLink>
    <NavLink to="/gallery" activeStyle={{ color: "#66a824" }}>
      Gallery
    </NavLink>
    <NavLink to="/contact" activeStyle={{ color: "#66a824" }}>
      Contact
    </NavLink>
  </NavLinks>
)

export default Nav
