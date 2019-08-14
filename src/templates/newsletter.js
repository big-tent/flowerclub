import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const NewsHolder = styled.article`
  max-width: 750px;
  margin: 0 auto;
`

const NewsCopy = styled.div`
  color: #161616;
  font-family: "Libre Baskerville", serif;
  line-height: 1.5;
  margin-top: 2rem;
`

export default ({ data }) => {
  const post = data.contentfulNewsletter
  return (
    <Layout>
      <SEO
        title="Newsletter"
        keywords={[`Canterbury`, `Flower`, `Club`, `Newsletter`]}
      />
      <NewsHolder>
        <PageHeader pagetitle={post.title} />
        <NewsCopy
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
        />
      </NewsHolder>
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
