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

export default ({ data, pageContext }) => {
  const gallery = data.contentfulImage
  const { event } = pageContext
  return (
    <Layout>
      <SEO
        title="Gallery"
        keywords={[`Canterbury`, `Flower`, `Club`, `Gallery`, `Pictures`]}
      />
      <PageHeader pagetitle={gallery.event} />
      <GalleryHolder>
        <h4>{gallery.slug}</h4>
        <h2>{event}</h2>
        <Img fluid={gallery.image.fluid} alt={gallery.image.description} />
        <p>{gallery.image.description}</p>
        <ul>
          {data.allContentfulImage.edges.map((edge, i) => (
            <li key={i}>{edge.node.slug}</li>
          ))}
        </ul>
      </GalleryHolder>
    </Layout>
  )
}

export const query = graphql`
  query galleryTemplateQuery($slug: String!, $event: String!) {
    contentfulImage(slug: { eq: $slug }) {
      slug
      event
      image {
        description
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    allContentfulImage(filter: { event: { eq: $event } }) {
      edges {
        node {
          slug
          event
        }
      }
    }
  }
`
