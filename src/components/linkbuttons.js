import React from "react"
import styled from "styled-components"

import email from "../images/email-icon.svg"

const LinkButtonsHolder = styled.aside`
  display: flex;
  height: 100vh;
  align-items: center;
  position: fixed;
  right: 0;
  @media (max-width: 900px) {
    bottom: 0;
    height: auto;
  }
`

const LinkButtonsContainer = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 100vw;
  }
`

const LinkButton = styled.li`
  background: #66a824;
  color: #f7fff0;
  height: 50px;
  list-style: none;
  transition: 0.5s ease-out;
  margin: 0;
  width: calc(100% / 4);
  :nth-of-type(2) {
    background: #578f1e;
  }
  :nth-of-type(3) {
    background: #407010;
  }
  :nth-of-type(4) {
    background: #2b4e09;
  }
  img {
    height: 50%;
  }
  @media (min-width: 900px) {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.5);
    width: 50px;
    :hover {
      border-radius: 5px 0 0 5px;
      width: 60px;
    }
  }
`

const ATag = styled.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const LinkButtons = () => (
  <LinkButtonsHolder>
    <LinkButtonsContainer>
      <LinkButton>
        <ATag href="mailto:diana@canterburyflowerclub.com">
          <img src={email} alt="email icon" />
        </ATag>
      </LinkButton>
      <LinkButton>
        <ATag href="tel:01795534129">
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 0h4a1 1 0 0 1 .98.804l1 5a1 1 0 0 1-.273.903L5.193 9.222a12.05 12.05 0 0 0 5.585 5.585l2.515-2.514a1 1 0 0 1 .903-.274l5 1A1 1 0 0 1 20 14v4a2 2 0 0 1-2 2h-2C7.163 20 0 12.837 0 4V2a2 2 0 0 1 2-2z"
              fill="#FEFEFE"
            />
          </svg>
        </ATag>
      </LinkButton>
      <LinkButton>
        <ATag href="https://twitter.com/cburyflowerclub">
          <svg
            width="24"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 3.305a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.996c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.897a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 18.288 13.94 13.94 0 0 0 7.548 20.5c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 3.305z"
              fill="#FEFEFE"
            />
          </svg>
        </ATag>
      </LinkButton>
      <LinkButton>
        <ATag href="https://en-gb.facebook.com/cburyflowerclub/">
          <svg
            width="13"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 8.748h-3v4h3v12h5v-12h3.642l.358-4h-4V7.081c0-.955.192-1.333 1.115-1.333H12.5v-5H8.692C5.096.748 3.5 2.331 3.5 5.363v3.385z"
              fill="#FEFEFE"
            />
          </svg>
        </ATag>
      </LinkButton>
    </LinkButtonsContainer>
  </LinkButtonsHolder>
)

export default LinkButtons
