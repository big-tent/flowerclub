import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventListing from "../components/content/eventlisting"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <h1>Hello Mum and Vicky</h1>
    <p>
      This is not at all what it will look like - just getting Contentful
      working!
    </p>
    {data.allContentfulEvent.edges.map(({ node }) => {
      return <EventListing post={{ node }} />
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    allContentfulEvent {
      edges {
        node {
          date
          title
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          slug
        }
      }
    }
  }
`
