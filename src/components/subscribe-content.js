import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./subscribe.css"
import { BsDot } from "react-icons/bs"

export default class IndexPage extends React.Component {
  state = {
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)

        this.setState({
          email: "",
        })
      })
      .catch(err => {
        alert(
          `${this.state.email} is already subscribed OR something went wrong!`
        )
      })
  }

  render() {
    return (
      <div className="subscribe-div">
        <Container style={{ width: "80%" }} fluid>
          <Row>
            <Col sm={6}>
              <br />
              <br />

              <Card className="feed-card" style={{ width: "200px" }}>
                <Card.Body>
                  <a
                    href="/feed.xml"
                    target="_blank"
                    className="stretched-link"
                  >
                    <Card.Text
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      RSS Feed
                    </Card.Text>
                  </a>
                </Card.Body>
              </Card>

              <br />
              <br />
              <br />

              <Card className="feed-card" style={{ width: "200px" }}>
                <Card.Body>
                  <a
                    href="/feed.json"
                    target="_blank"
                    className="stretched-link"
                  >
                    <Card.Text
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      JSON Feed
                    </Card.Text>
                  </a>
                </Card.Body>
              </Card>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>

            <Col sm={6}>
              <h2 className="text-center">
                <u>Subscribe</u> to receive an email from me whenever I add a
                new blog post.
              </h2>
              <br />

              <Form className="subscribe-form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    onChange={this._handleChange}
                    name="email"
                    type="email"
                    value={this.state.email}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    <BsDot /> I won't spam you
                  </Form.Text>
                  <Form.Text className="text-muted">
                    <BsDot /> You can unsubscribe <b>any</b> time.
                  </Form.Text>
                </Form.Group>

                <Button
                  onClick={this._handleSubmit}
                  style={{ backgroundColor: "#757575" }}
                  variant="primary"
                  type="submit"
                >
                  Confirm
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
