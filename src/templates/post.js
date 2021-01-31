import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { graphql, Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Img from "gatsby-image"
import "./post.css"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Code from "../components/code.js"
import SocialShare from "../components/share.js"
import SEO from "../components/seo.js"

const components = {
  code: Code,
}

export default ({ data }) => (
  <div>
    <SEO
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
      image={data.mdx.frontmatter.socialimage.childImageSharp.resize}
      pathname={data.mdx.frontmatter.slug}
      keywords={data.mdx.frontmatter.tags}
      publishedOn={data.mdx.frontmatter.date}
      readingTime={data.mdx.fields.readingTime.text}
    />

    <Header />

    <br />
    <br />
    <br />
    <div>
      <div>
        <Container fluid="xl">
          <Img
            fluid={data.mdx.frontmatter.displayimage.childImageSharp.fluid}
            style={{ maxHeight: "400px", width: "100%" }}
            imgStyle={{ objectFit: "cover" }}
            alt="post-background"
          />
        </Container>
        <br />
      </div>

      <Container className="post-container" style={{ textAlign: "justify" }}>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}>
              {data.mdx.frontmatter.title}
            </h1>
            <h5 style={{ textAlign: "center" }}>
              {data.mdx.frontmatter.description}
            </h5>
            <br />
            <p style={{ textAlign: "center" }}>
              <a
                href="https://raywonkari.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raywon Kari
              </a>{" "}
              - Published on {data.mdx.frontmatter.date} -{" "}
              {data.mdx.fields.readingTime.text}{" "}
            </p>

            <div style={{ textAlign: "center" }}>
              {data.mdx.frontmatter.tags.map(value => {
                return (
                  <Button
                    variant="outline-danger"
                    style={{ margin: "8px", padding: "5px 3px" }}
                  >
                    <Link to={`/tags/${value}/`} style={{ color: "inherit" }}>
                      {value}
                    </Link>
                  </Button>
                )
              })}
            </div>

            <MDXProvider components={components}>
              <MDXRenderer
                components={components}
                slug={data.mdx.frontmatter.slug}
              >
                {data.mdx.body}
              </MDXRenderer>
            </MDXProvider>

            <br />
          </Col>
        </Row>
      </Container>

      <Container>
        <SocialShare
          title={data.mdx.frontmatter.title}
          link={data.mdx.frontmatter.slug}
        />
      </Container>
    </div>

    <Footer />
  </div>
)

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
        displayimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialimage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
