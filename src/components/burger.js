import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuToggle = styled.div`
  display: block;
  position: relative;
  user-select: none;
  z-index: 1;
  @media (min-width: 600px) {
    display: none;
  }
`

const MenuInput = styled.input`
  cursor: pointer;
  display: block;
  height: 32px;
  left: -5px;
  opacity: 0;
  position: absolute;
  top: -7px;
  width: 40px;
  z-index: 2;
  -webkit-touch-callout: none;
  :checked ~ span {
    opacity: 1;
    transform: rotate(-45deg);
    background: #fffbf1;
    :nth-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    :nth-child(2) {
      opacity: 1;
      transform: rotate(45deg);
      background: #fffbf1;
    }
  }
  :checked ~ ul {
    transform: none;
  }
`

const BurgerSpan = styled.span`
  background: #193003;
  border-radius: 3px;
  display: block;
  height: 4px;
  margin-bottom: 6px;
  position: relative;
  transform-origin: 5.5px 3px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  width: 40px;
  z-index: 1;
`

const MenuHolder = styled.ul`
  background: linear-gradient(180deg, #578f1e 0%, #69e052 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  list-style: none;
  padding: 8rem 9vw 6rem;
  position: fixed;
  right: 0;
  top: 0;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  width: 100vw;
  -webkit-font-smoothing: antialiased;
`

const MenuItem = styled.li`
  color: #f7fff0;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
`

const Burger = () => (
  <MenuToggle>
    <MenuInput type="checkbox" />
    <BurgerSpan />
    <BurgerSpan />
    <BurgerSpan />
    <MenuHolder>
      <Link to="/" activeStyle={{ color: "red" }}>
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to="/events">
        <MenuItem>Events</MenuItem>
      </Link>
      <Link to="news">
        <MenuItem>News</MenuItem>
      </Link>
      <Link to="gallery">
        <MenuItem>Gallery</MenuItem>
      </Link>
      <Link to="/contact">
        <MenuItem>Contact</MenuItem>
      </Link>
    </MenuHolder>
  </MenuToggle>
)

export default Burger
