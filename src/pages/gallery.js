import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const GalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 20px;
  padding: 2rem 0;
`

const GalleryListingItem = styled.li`
  background: #fefefe;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  list-style: none;
  transition: 1s all;
  :hover {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`

const GalleryGridLink = styled(Link)`
  color: #333333;
  text-decoration: none;
`

const GalleryImage = styled(Img)`
  height: 78%;
  object-fit: cover;
`

const GalleryCopyHolder = styled.div`
  padding: 1rem;
`

const GalleryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;
`

const GallerySeeMore = styled.h6`
  font-size: 16px;
  font-weight: 300;
`

const GalleryList = ({ node }) => (
  <GalleryListingItem>
    <GalleryGridLink to={`/${node.slug}`}>
      <GalleryImage fluid={node.image.fluid} alt={node.image.description} />
      <GalleryCopyHolder>
        <GalleryTitle>{node.event}</GalleryTitle>
        <GallerySeeMore>Click to see more</GallerySeeMore>
      </GalleryCopyHolder>
    </GalleryGridLink>
  </GalleryListingItem>
)

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <PageHeader pagetitle="Gallery" />
    <GalleryGrid>
      {data.allContentfulImage.group.map((groupevent, i) => (
        <GalleryList node={groupevent.edges[0].node} key={i} />
      ))}
    </GalleryGrid>
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
