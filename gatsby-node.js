const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulGallery {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulFilm {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulGallery.edges.forEach(edge => {
    createPage({
      path: `/photos/${edge.node.slug}`,
      component: path.resolve("./src/templates/gallery.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
  response.data.allContentfulFilm.edges.forEach(edge => {
    createPage({
      path: `/films/${edge.node.slug}`,
      component: path.resolve("./src/templates/film.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
