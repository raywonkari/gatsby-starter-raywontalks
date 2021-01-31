import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import "./404.css"
import { MdFindInPage } from "react-icons/md"

export default () => (
  <div className="notfound">
    <Container>
      <Row>
        <Col>
          <p style={{ textAlign: "center" }}>
            <b>-------------------------------------------</b>
          </p>
          <h1 style={{ textAlign: "center" }}>
            Page Not Found <MdFindInPage size={50} />
          </h1>
          <p style={{ textAlign: "center" }}>
            <b>-------------------------------------------</b>
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)
