import React from "react"
import { styled } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <PageHeader pagetitle="Gallery" />
    <ul>
      {data.allContentfulImage.edges.map((edge, i) => (
        <li key={i}>
          <img src={edge.node.image.fluid.src} />
        </li>
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
              src
            }
          }
          slug
          event
        }
      }
    }
  }
`
