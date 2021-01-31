import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "./articles-list.css"
import { graphql, StaticQuery, Link } from "gatsby"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button"

function Articles() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(
            limit: 3
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  slug
                }
                fields {
                  readingTime {
                    text
                  }
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <Container>
            <Row>
              <Col>
                <br />
                <h1 className="heading">
                  <u>Latest Articles</u>
                </h1>
                <br />

                <div>
                  <CardDeck>
                    {data.allMdx.edges.map(({ node }) => (
                      <Card className="card">
                        <Card.Body>
                          <Link
                            to={node.frontmatter.slug}
                            className="stretched-link card-links"
                          >
                            <Card.Title id="card-title">
                              {node.frontmatter.title}
                            </Card.Title>
                          </Link>
                          <Card.Text>{node.excerpt}</Card.Text>
                          <Card.Footer
                            className="text-muted"
                            style={{ textAlign: "center" }}
                          >
                            Published on: {node.frontmatter.date}
                          </Card.Footer>
                          <Card.Footer
                            className="text-muted"
                            style={{ textAlign: "center" }}
                          >
                            {node.fields.readingTime.text}
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    ))}
                  </CardDeck>

                  <br />
                  <p style={{ textAlign: "center", fontSize: "larger" }}>
                    <Button variant="outline-secondary">
                      <Link to="/articles/" style={{ color: "black" }}>
                        View All
                      </Link>
                    </Button>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    />
  )
}

export default Articles
