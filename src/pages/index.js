import React from "react"
import Layout from "src/components/common/Layout"
import SEO from "src/components/common/SEO"
import Hero from 'src/components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
