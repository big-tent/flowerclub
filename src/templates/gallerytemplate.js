import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const EventGalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 20px;
  padding: 2rem 0;
`

const EventGalleryListingItem = styled.li`
  list-style: none;
`

const EventImage = styled(Img)`
  height: 90%;
`

const EventImageCaption = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-top: 5px;
`

const GalleryTemplate = ({ data, pageContext }) => {
  const { event } = pageContext
  return (
    <Layout>
      <SEO
        title="Gallery"
        keywords={[`Canterbury`, `Flower`, `Club`, `Gallery`, `Pictures`]}
      />
      <PageHeader pagetitle={event} />
      <EventGalleryGrid>
        {data.allContentfulImage.edges.map((edge, i) => (
          <EventGalleryListingItem key={i}>
            <EventImage
              fluid={edge.node.image.fluid}
              alt={edge.node.image.description}
            />
            <EventImageCaption>{edge.node.image.description}</EventImageCaption>
          </EventGalleryListingItem>
        ))}
      </EventGalleryGrid>
    </Layout>
  )
}

export default GalleryTemplate

export const query = graphql`
  query galleryTemplateQuery($event: String!) {
    allContentfulImage(filter: { event: { eq: $event } }) {
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
