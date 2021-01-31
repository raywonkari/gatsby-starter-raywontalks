import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Tags from "../components/tags.js"
import SEO from "../components/seo.js"

export default () => (
  <div>
    <SEO title="All article tags in Raywon's Blog" />
    <Header />
    <Tags />
    <Footer />
  </div>
)
