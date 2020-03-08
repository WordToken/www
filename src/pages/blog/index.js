import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const parse = require('url-parse') 


const BlogIndexPage = ({ data }) => {
  const { edges } = data.allGhostPost

  return (<Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <ul>{edges.map(edge => {
      const { title, slug } = edge.node

      return <li><Link to={`/blog/${slug}`}>{title}</Link></li>
    })}</ul>
  </Layout>)
}

export const pageQuery = graphql`
  query MyQuery {
    allGhostPost {
      edges {
        node {
          id
          html
          reading_time
          excerpt
          title
          published_at
          url
          slug
          primary_author {
            name
          }
        }
      }
    }
  }
`


export default BlogIndexPage
