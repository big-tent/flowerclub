import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const GalleryHolder = styled.article`
  margin: 0 auto;
  padding: 2rem 0;
`

const EventGalleryListingItem = styled.li`
  list-style: none;
  padding: 2rem 0;
`
const EventImage = styled(Img)`
  width: 200px;
`

export default ({ data, pageContext }) => {
  const { event } = pageContext
  return (
    <Layout>
      <SEO
        title="Gallery"
        keywords={[`Canterbury`, `Flower`, `Club`, `Gallery`, `Pictures`]}
      />
      <PageHeader pagetitle={event} />
      <GalleryHolder>
        <ul>
          {data.allContentfulImage.edges.map((edge, i) => (
            <EventGalleryListingItem key={i}>
              <EventImage
                fluid={edge.node.image.fluid}
                alt={edge.node.image.description}
              />
              {edge.node.image.description}
            </EventGalleryListingItem>
          ))}
        </ul>
      </GalleryHolder>
    </Layout>
  )
}

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
