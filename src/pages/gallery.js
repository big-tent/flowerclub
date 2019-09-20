import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const GalleryListingItem = styled.li`
  list-style: none;
  padding: 2rem 0;
`

const GalleryImage = styled(Img)`
  width: 200px;
`

const GalleryList = ({ node }) => (
  <GalleryListingItem>
    <Link to={`/${node.slug}`}>
      <GalleryImage fluid={node.image.fluid} alt={node.image.description} />
      <h3>{node.image.description}</h3>
    </Link>
  </GalleryListingItem>
)

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <PageHeader pagetitle="Gallery" />
    <ul>
      {data.allContentfulImage.group.map((groupevent, i) => (
        <GalleryList node={groupevent.edges[0].node} key={i} />
      ))}
    </ul>
  </Layout>
)

export default GalleryPage

export const galleryQuery = graphql`
  query GalleryQuery {
    allContentfulImage {
      group(field: event) {
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
  }
`
