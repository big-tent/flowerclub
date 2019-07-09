import React from "react"
import styled from "styled-components"

const LinkButtonsHolder = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  right: 0;
`

const LinkButtonsContainer = styled.ul`
  box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.5);
`

const LinkButton = styled.li`
  background: #66a824;
  color: #f7fff0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  list-style: none;
  margin: 0;
  width: 50px;
  :nth-of-type(2) {
    background: #578f1e;
  }
  :nth-of-type(3) {
    background: #407010;
  }
  :nth-of-type(4) {
    background: #2b4e09;
  }
`

const LinkButtons = () => (
  <LinkButtonsHolder>
    <LinkButtonsContainer>
      <LinkButton>1</LinkButton>
      <LinkButton>2</LinkButton>
      <LinkButton>3</LinkButton>
      <LinkButton>4</LinkButton>
    </LinkButtonsContainer>
  </LinkButtonsHolder>
)

export default LinkButtons
