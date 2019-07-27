import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Chevron from "../components/chevron-svg"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <h1>Gallery</h1>
    <p>Nice pictures in here</p>
    <Chevron size="50" />
  </Layout>
)

export default GalleryPage
