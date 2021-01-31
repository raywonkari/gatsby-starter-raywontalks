const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
          totalCount
          distinct(field: frontmatter___tags)
        }
      }
    `).then(result => {
      const postsPerPage = 4
      const totalPages = result.data.allMdx.totalCount
      const numPages = Math.ceil(totalPages / postsPerPage)

      // result.data.allMdx.distinct.forEach( ({  }) )
      Array.from(result.data.allMdx.distinct).forEach(val => {
        createPage({
          path: `/tags/${val}/`,
          component: path.resolve("./src/templates/tag-page.js"),
          context: {
            tag: val,
          },
        })
      })

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/articles` : `/articles/${i + 1}`,
          component: path.resolve("./src/templates/article-pages.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })

      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve("./src/templates/post.js"),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
