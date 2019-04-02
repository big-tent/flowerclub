import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.contentfulNewsletter
  return (
    <Layout>
      <SEO
        title="Newsletter"
        keywords={[`Canterbury`, `Flower`, `Club`, `Newsletter`]}
      />
      <div>
        <h1>{post.title}</h1>
        <h5>{post.date}</h5>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
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
