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

export default ({ data }) => {
  const gallery = data.contentfulImage
  return (
    <Layout>
      <SEO
        title="Gallery"
        keywords={[`Canterbury`, `Flower`, `Club`, `Gallery`, `Pictures`]}
      />
      <PageHeader pagetitle="Event gallery" />
      <GalleryHolder>Hello this is a gallery</GalleryHolder>
      <h2>{gallery.slug}</h2>
      <h2>{gallery.event}</h2>
      <Img fluid={gallery.image.fluid} alt={gallery.image.description} />
    </Layout>
  )
}

export const query = graphql`
  query galleryTemplateQuery($slug: String!) {
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
  }
`
