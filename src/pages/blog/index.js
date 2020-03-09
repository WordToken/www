import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const BlogIndexPage = ({ data }) => {
  const { edges } = data.allGhostPost

  return (<Layout>
            <SEO title="Blog" />

            <SectionWrapper>
              <SectionTitle>Blog</SectionTitle>
              <SectionList>
                {edges.map(edge => {
                  const { title, slug } = edge.node
                  return <SectionListItem><Link to={`/blog/${slug}`}>{title}</Link></SectionListItem>
                })}
              </SectionList>
            </SectionWrapper>

          </Layout>)
}

export const pageQuery = graphql`
  query MyQuery {
    allGhostPost(sort: { order:DESC, fields: published_at }) {
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



const SectionWrapper = styled.section`
  margin-top: 100px;
`

const SectionTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
`

const SectionList = styled.ul`
  margin: 50px auto 0 auto;
  text-align: center;
`

const SectionListItem = styled.li`
  font-size: 30px;
  list-style-type: none;
`