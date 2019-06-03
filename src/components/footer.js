import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  color: rebeccapurple;
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
  padding: 1rem 5rem;
  a {
    color: inherit;
    font-weight: 800;
    text-decoration: none;
    :hover {
      color: #ff8001;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <h6>© Canterbury Flower Club {new Date().getFullYear()}</h6>
    <h6>
      Built with &hearts; by
      {` `}
      <a href="https://www.bigtent.media">Big Tent</a>
    </h6>
  </FooterWrapper>
)

export default Footer
