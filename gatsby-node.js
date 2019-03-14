const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulNewsletter {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulNewsletter.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve("src/templates/newsletter.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
