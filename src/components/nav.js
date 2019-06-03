import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinks = styled.nav`
  a {
    color: rebeccapurple;
    margin-left: 1rem;
    text-decoration: none;
    :hover {
      color: black;
    }
  }
  display: flex;
`
const NavLink = styled(Link)`
  font-size: 1.5rem;
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
