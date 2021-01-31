import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./index-content.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

function Content() {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "homeimage.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Container className="index-image" fluid="xl">
          <Row id="index-image-row">
            <Col>
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="index background"
              />
              <p style={{ textAlign: "right", fontSize: "small" }}>
                {" "}
                Art Credits:{" "}
                <a
                  style={{ color: "red" }}
                  href="https://instagram.com/happimage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <b>Happimage</b>{" "}
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}

export default Content
