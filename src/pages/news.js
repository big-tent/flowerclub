import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const NewsListingItem = styled.li`
  border-bottom: 2px solid #cccccc;
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  @media (max-width: 600px) {
    padding: 3.5vh 0;
  }
`

const NewsLink = styled(Link)`
  text-decoration: none;
`

const NewsHolder = styled.article``

const NewsHeading = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: -0.01em;
  color: #193003;
`

const NewsExcerpt = styled.div`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #161616;
`

const ReadMore = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #a6a6a6;
`

const NewsletterList = ({ node }) => (
  <NewsListingItem>
    <NewsLink to={`/${node.slug}`}>
      <NewsHolder>
        <NewsHeading>{node.title}</NewsHeading>
        <NewsExcerpt
          dangerouslySetInnerHTML={{
            __html: node.content.childMarkdownRemark.excerpt,
          }}
        />
        <ReadMore>Click to read more</ReadMore>
      </NewsHolder>
    </NewsLink>
  </NewsListingItem>
)

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <PageHeader pagetitle="News" />
    <ul>
      {data.allContentfulNewsletter.edges.map((edge, i) => (
        <NewsletterList node={edge.node} key={i} />
      ))}
    </ul>
  </Layout>
)

export default NewsPage

export const newsQuery = graphql`
  query newsQuery {
    allContentfulNewsletter(sort: { fields: date }) {
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
