import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const GalleryListingItem = styled.li`
  list-style: none;
  padding: 2rem 0;
`

const GalleryList = ({ node }) => (
  <GalleryListingItem>
    <Img fluid={node.image.fluid} alt={node.image.description} />
  </GalleryListingItem>
)

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <PageHeader pagetitle="Gallery" />
    <ul>
      {data.allContentfulImage.edges.map((edge, i) => (
        <GalleryList node={edge.node} key={i} />
      ))}
    </ul>
  </Layout>
)

export default GalleryPage

export const galleryQuery = graphql`
  query GalleryQuery {
    allContentfulImage {
      edges {
        node {
          image {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          slug
          event
        }
      }
    }
  }
`
