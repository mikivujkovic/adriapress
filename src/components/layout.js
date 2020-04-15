import React, { useState } from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"

// import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(true)
  return (
    <div className="main-page">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
