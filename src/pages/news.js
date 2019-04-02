import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsletterList = ({ node }) => (
  <li>
    <Link to={node.slug}>
      <article>
        <h2>{node.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: node.content.childMarkdownRemark.excerpt,
          }}
        />
        <p>Click to read more</p>
      </article>
    </Link>
  </li>
)

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <h1>News</h1>
    <ul>
      {data.allContentfulNewsletter.edges.map(edge => (
        <NewsletterList node={edge.node} />
      ))}
    </ul>
  </Layout>
)

export default NewsPage

export const newsQuery = graphql`
  query newsQuery {
    allContentfulNewsletter {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
