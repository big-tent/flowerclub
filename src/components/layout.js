import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Background = styled.div`
  background: linear-gradient(122.01deg, #fffee6 0%, #fffefa 100%);
  border-top: 8px solid #578f1e;
  min-height: 100vh;
`

const MainWrapper = styled.main`
  min-height: 60vh;
  margin: 0 auto;
  max-width: 90vw;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
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
