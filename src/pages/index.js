import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Category from "../components/category"

export const query = graphql`
  query {
    wpgraphql {
      posts(first: 1000) {
        nodes {
          id
          uri
          title
          excerpt
          date
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
`

const Index = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes

  const postData = []

  const categoryData = posts.map(post =>
    postData.push({
      id: post.id,
      uri: post.uri,
      title: post.title,
      thumbnail: post.jovo.thumbnail,
      veliki: post.jovo.velikiVideoZaPretplatnike,
      category: post.categories.nodes[0].name,
      date: post.date.slice(0, 10),
      excerpt: post.excerpt,
    })
  )

  console.log("postData: ", postData)
  console.log("categoryData: ", categoryData)

  console.log("sve: ", postData)

  const sport = postData.filter(post => post.category === "Sport")
  console.log("sport: ", sport)
  const auto = postData.filter(post => post.category === "Automobilizam")
  const kultura = postData.filter(post => post.category === "Kultura")
  const najnovijeNaslov = "NAJNOVIJE"
  const sportNaslov = "SPORT"
  const autoNaslov = "AUTOMOBILIZAM"
  const kulturaNaslov = "KULTURA"

  return (
    <Layout>
      {/* {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link
              to={`blog${post.uri}`}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </h2>
          <img src={post.jovo.thumbnail} alt="thumbnail" />
          <p>category: {post.categories.nodes[0].name}</p>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      ))} */}
      <Category data={postData} title={najnovijeNaslov} />
      <Category data={sport} title={sportNaslov} id={sportNaslov} />
      <Category data={auto} title={autoNaslov} id={autoNaslov} />
      <Category data={kultura} title={kulturaNaslov} id={kulturaNaslov} />
    </Layout>
  )
}

export default Index
