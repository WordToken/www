
import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import moment from 'moment'

import Layout from '../components/layout'


export default function Template({ data }) {
  const { ghostPost } = data // data.markdownRemark holds your post data
  const { title, html, published_at } = ghostPost

  console.log(moment(), 'moment')
  return (
    <Layout>
      <BlogPostWrapper>
        <h1>{title}</h1>
        <h2>{moment(published_at).local().format('MMM DD, YYYY')}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogPostWrapper>
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


const BlogPostWrapper = styled.div`
  margin-top: 50px;
`