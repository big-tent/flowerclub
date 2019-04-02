import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/events">Events</Link>
    <Link to="/news">News</Link>
  </nav>
)

export default Nav
