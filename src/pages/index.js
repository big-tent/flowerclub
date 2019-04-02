import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <h1>Hello Flower People!</h1>
    <p>
      This is not at all what it will look like - just getting Contentful
      working...
    </p>
  </Layout>
)

export default IndexPage
