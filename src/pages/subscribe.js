import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Subscribe from "../components/subscribe-content.js"
import SEO from "../components/seo.js"

export default () => (
  <div>
    <SEO title="Subscribe to Raywon's Blog" />
    <Header />
    <Subscribe />
    <Footer />
  </div>
)
