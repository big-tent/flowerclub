import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinks = styled.nav`
  a {
    color: #fefefe;
    margin-right: 1rem;
    text-decoration: none;
    :hover {
      color: #a9a9a9;
    }
  }
  display: flex;
`

const Nav = () => (
  <NavLinks>
    <h5>
      <Link to="/">Home</Link>
    </h5>
    <h5>
      <Link to="/events">Events</Link>
    </h5>
    <h5>
      <Link to="/news">News</Link>
    </h5>
    <h5>
      <Link to="/gallery">Gallery</Link>
    </h5>
    <h5>
      <Link to="/contact">Contact</Link>
    </h5>
  </NavLinks>
)

export default Nav
