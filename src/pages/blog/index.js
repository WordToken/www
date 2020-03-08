import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const BlogIndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (<Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <ul>{edges.map(edge => {
      const { frontmatter } = edge.node
      return <li><Link to={frontmatter.path}>{frontmatter.title}</Link></li>
    })}</ul>
  </Layout>)
}


export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`


export default BlogIndexPage
