import React from "react"
import styled from "styled-components"

const LinkButtonsHolder = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  right: 0;
`

const LinkButtonsContainer = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const LinkButton = styled.li`
  align-items: center;
  background: #66a824;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.5);
  color: #f7fff0;
  display: flex;
  height: 50px;
  justify-content: center;
  list-style: none;
  transition: 0.5s ease-out;
  margin: 0;
  width: 50px;
  :hover {
    width: 60px;
  }
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
      <LinkButton>
        <svg
          width="15"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 11.25c1.062 0 2.02-.442 2.702-1.151a2.624 2.624 0 0 0 4.796-1.474L15 7.498a7.498 7.498 0 1 0-4.63 6.93.75.75 0 1 0-.574-1.386A5.999 5.999 0 1 1 13.5 7.497L13.5 8.624a1.125 1.125 0 1 1-2.25 0V7.5A3.75 3.75 0 1 0 7.5 11.25zM9.75 7.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"
            fill="#FEFEFE"
          />
        </svg>
      </LinkButton>
      <LinkButton>
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
      </LinkButton>
      <LinkButton>
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
      </LinkButton>
      <LinkButton>
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
      </LinkButton>
    </LinkButtonsContainer>
  </LinkButtonsHolder>
)

export default LinkButtons
