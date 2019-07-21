import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  color: hsla(0, 9%, 9%, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 1rem 9vw;
  a {
    color: inherit;
    font-weight: 800;
    text-decoration: none;
    transition: all 1s;
    :hover {
      color: #ff8001;
    }
  }
  @media (max-width: 900px) {
    margin-bottom: 50px;
  }
`

const FooterText = styled.h6`
  font-size: 0.6rem;
  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>© Canterbury Flower Club {new Date().getFullYear()}</FooterText>
    <FooterText>
      Built with &hearts; in
      <a href="https://www.instagram.com/rochesterdaily/?hl=en">
        {" "}
        Rochester
      </a>{" "}
      by
      <a href="https://www.bigtent.media"> Big Tent</a>
    </FooterText>
  </FooterWrapper>
)

export default Footer
