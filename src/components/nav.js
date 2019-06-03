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
  }
  display: flex;
  align-items: center;
  /* max-height: 4rem; */
`
const NavLink = styled(Link)`
  font-size: 2.1vw;
  font-weight: 600;
`

const Nav = () => (
  <NavLinks>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/news">News</NavLink>
    <NavLink to="/gallery">Gallery</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavLinks>
)

export default Nav
