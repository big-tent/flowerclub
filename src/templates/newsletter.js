import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.contentfulNewsletter
  return (
    <div>
      <h1>{post.title}</h1>
      <h5>{post.date}</h5>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export const query = graphql`
  query newsletterQuery($slug: String!) {
    contentfulNewsletter(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
