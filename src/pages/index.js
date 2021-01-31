import React from "react"
import Header from "../components/header.js"
import Content from "../components/index-content.js"
import Footer from "../components/footer.js"
import Articles from "../components/articles-list.js"
import SEO from "../components/seo.js"

export default () => (
  <div>
    <SEO title="Raywon's Blog" />
    <Header />
    <Content />
    <Articles />
    <Footer />
  </div>
)
