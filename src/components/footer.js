import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GoLinkExternal } from "react-icons/go"

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              marginTop: "35px",
            }}
          >
            <br />
            <h4 style={{ textAlign: "center" }}>Raywon's Blog © 2020</h4>
            <h6 style={{ textAlign: "center" }}>
              Built with {` `}{" "}
              <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby <GoLinkExternal />
              </a>{" "}
              & {` `}{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React <GoLinkExternal />
              </a>
            </h6>
            <br />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
