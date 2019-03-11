import React from "react"
import { StaticQuery, graphql } from "gatsby"

const eventlisting = () => (
  <StaticQuery
    query={graphql`
      query eventQuery {
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
            }
          }
        }
      }
    `}
    render={node => (
      <li>
        <article>
          <h2>{node.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: node.content.childMarkdownRemark.excerpt,
            }}
          />
        </article>
      </li>
    )}
  />
)

export default eventlisting
