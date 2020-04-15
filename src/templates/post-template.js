import React from "react"
import { graphql } from "gatsby"
import HeaderPost from "../components/header-post"
import Footer from "../components/footer"
import "../styles/post-template.css"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.wpgraphql.post
  return (
    <>
      <HeaderPost />
      <div className="content-wrapper">
        <div className="title-post">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="content-html"
        />
      </div>

      <Footer />
    </>
  )
}

export default PostTemplate
