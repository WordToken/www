const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allGhostPost(
        sort: { order: DESC, fields: [published_at] }
        limit: 1000
      ) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allGhostPost.edges.forEach(({ node }) => {

    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        title: node.title
      }, // additional data can be passed via context
    })
  })
}