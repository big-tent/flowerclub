import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import EventListing from "../components/content/eventlisting"

const EventListing = ({ node }) => (
  <li>
    <article>
      <h2>{node.title}</h2>
      <h6>{node.date}</h6>
      <div
        dangerouslySetInnerHTML={{
          __html: node.content.childMarkdownRemark.excerpt,
        }}
      />
    </article>
  </li>
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <h1>Hello Flower People!</h1>
    <p>
      This is not at all what it will look like - just getting Contentful
      working...
    </p>
    <ul>
      {data.allContentfulEvent.edges.map(edge => (
        <EventListing node={edge.node} />
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    allContentfulEvent {
      edges {
        node {
          date(formatString: "DD MMMM, YYYY")
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
