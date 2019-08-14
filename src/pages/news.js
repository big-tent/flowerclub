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
  :hover {
    cursor: pointer;
  }
`

const NewsExcerptHolder = styled.article``

const NewsExcerptHeading = styled.h2`
  color: #193003;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
`

const NewsExcerpt = styled.div`
  color: #161616;
  font-family: "Libre Baskerville", serif;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
`

const ReadMore = styled.p`
  color: #a6a6a6;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
`

const NewsletterList = ({ node }) => (
  <NewsListingItem>
    <NewsLink to={`/${node.slug}`}>
      <NewsExcerptHolder>
        <NewsExcerptHeading>{node.title}</NewsExcerptHeading>
        <NewsExcerpt
          dangerouslySetInnerHTML={{
            __html: node.content.childMarkdownRemark.excerpt,
          }}
        />
        <ReadMore>Click to read more</ReadMore>
      </NewsExcerptHolder>
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
