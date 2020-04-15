exports.createPages = async ({ actions, graphql }) => {
  return graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            id
            uri
          }
        }
        posts {
          nodes {
            id
            uri
            title
            excerpt
            jovo {
              thumbnail
              velikiVideoZaPretplatnike
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log("result: ", result)
    const pages = result.data.wpgraphql.pages.nodes
    const pageTemplate = require.resolve("./src/templates/page-template.js")
    const posts = result.data.wpgraphql.posts.nodes
    const postTemplate = require.resolve("./src/templates/post-template.js")

    pages.forEach(page => {
      console.log("page created")
      actions.createPage({
        path: page.uri,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      })
    })

    posts.forEach(post => {
      console.log("post created")
      actions.createPage({
        path: `blog${post.uri}`,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })
  })
}
