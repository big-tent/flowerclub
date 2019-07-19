import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import LinkButtons from "./linkbuttons"
import Footer from "./footer"
import "./layout.css"

const Background = styled.div`
  background: linear-gradient(122.01deg, #fffee6 0%, #fffefa 100%);
  border-top: 8px solid #578f1e;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainWrapper = styled.main`
  padding: 2rem 9vw;
  flex: auto;
  @media (max-width: 900px) {
    padding-top: 1rem;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Background>
        <LinkButtons />
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </Background>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
