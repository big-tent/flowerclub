import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventListing = ({ node }) => (
  <li>
    <article>
      <h2>{node.title}</h2>
      <h6>{node.date}</h6>
      <div
        dangerouslySetInnerHTML={{
          __html: node.content.childMarkdownRemark.html,
        }}
      />
    </article>
  </li>
)

const EventsPage = ({ data }) => (
  <Layout>
    <SEO title="Events" />
    <h1>Events</h1>
    <ul>
      {data.allContentfulEvent.edges.map(edge => (
        <EventListing node={edge.node} />
      ))}
    </ul>
  </Layout>
)

export default EventsPage

export const eventsQuery = graphql`
  query eventsQuery {
    allContentfulEvent {
      edges {
        node {
          date(formatString: "DD MMMM, YYYY")
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          slug
        }
      }
    }
  }
`
