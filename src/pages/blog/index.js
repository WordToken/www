import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "src/components/common/Layout"
import Image from "src/components/common/Image"
import SEO from "src/components/common/SEO"


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
  font-family: acherus-militant-1-bold-otf;
`

const SectionList = styled.ul`
  margin: 50px auto 0 auto;
  text-align: center;
  font-family: acherus-militant-1-bold-otf;
`

const SectionListItem = styled.li`
  font-size: 28px;
  list-style-type: none;

`