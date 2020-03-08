
import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'


export default function Template({ data }) {
  const { ghostPost } = data // data.markdownRemark holds your post data
  const { title, html, published_at } = ghostPost

  return (
    <Layout>
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{published_at}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}



export const pageQuery = graphql`
  query($title: String) {
    ghostPost(title: { eq: $title }) {
      id
      html
      slug
      created_at
      reading_time
      excerpt
      title
      published_at
      primary_author {
        name
      }
    }
  }
`