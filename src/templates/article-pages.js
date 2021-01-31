import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link, graphql } from "gatsby"
import "./article-pages.css"
import Card from "react-bootstrap/Card"
import { FaPenAlt } from "react-icons/fa"
import { MdAccessTime } from "react-icons/md"
import { GoPrimitiveDot } from "react-icons/go"
import SEO from "../components/seo.js"

export const pageQuery = graphql`
  query blogPostQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            description
            tags
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

class BlogList extends React.Component {
  getButtons = tags => {
    return tags.map(value => {
      return (
        <Button variant="outline-info" style={{ margin: "8px" }}>
          {" "}
          <Link style={{ color: "inherit" }} to={`/tags/${value}/`}>
            {" "}
            {value}{" "}
          </Link>{" "}
        </Button>
      )
    })
  }

  render() {
    const { data } = this.props
    const posts = data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1
        ? "/articles/"
        : "/articles/" + (currentPage - 1).toString()
    const nextPage = "/articles/" + (currentPage + 1).toString()

    return (
      <div>
        <SEO />

        <Header />

        <div className="articles-page-content">
          <Container className="articles-page-container">
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>All of my writings!</h1>
                <br />

                {posts.map(({ node }) => {
                  return (
                    <div key={node.frontmatter.slug}>
                      <Card variant="light">
                        <Card.Body style={{ textAlign: "center" }}>
                          <Link
                            to={node.frontmatter.slug}
                            className="card-links"
                          >
                            <Card.Title>{node.frontmatter.title}</Card.Title>
                          </Link>
                          <Card.Text>{node.frontmatter.description}</Card.Text>
                          <Card.Text>
                            {this.getButtons(node.frontmatter.tags)}
                          </Card.Text>
                          <Card.Footer className="text-muted">
                            <FaPenAlt size={15} /> {node.frontmatter.date}{" "}
                            <GoPrimitiveDot /> {node.fields.readingTime.text}{" "}
                            <MdAccessTime size={15} />{" "}
                          </Card.Footer>
                        </Card.Body>
                      </Card>

                      <br />
                      <br />
                    </div>
                  )
                })}

                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {!isFirst && (
                    <Link to={prevPage} rel="prev" style={{ color: "black" }}>
                      <u>← Previous Page</u>
                    </Link>
                  )}

                  {Array.from({ length: numPages }, (_, i) => (
                    <li
                      key={`pagination-number${i + 1}`}
                      style={{
                        margin: 0,
                      }}
                    >
                      <Link
                        to={`/articles/${i === 0 ? "" : i + 1}`}
                        style={{
                          color: "black",
                          backgroundColor:
                            i + 1 === currentPage ? "#D3D3D3" : "",
                          padding: i + 1 === currentPage ? "8px" : "",
                        }}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}

                  {!isLast && (
                    <Link to={nextPage} rel="next" style={{ color: "black" }}>
                      <u>Next Page →</u>
                    </Link>
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    )
  }
}

export default BlogList
