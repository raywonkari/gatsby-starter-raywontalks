import React from "react"
import "./tag-page.css"
import { graphql, Link } from "gatsby"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Container from "react-bootstrap/Container"
import { FaPencilAlt } from "react-icons/fa"
import { GiPopcorn } from "react-icons/gi"
import { GoPrimitiveDot } from "react-icons/go"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import SEO from "../components/seo.js"

class TagsList extends React.Component {
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
    const { data, pageContext } = this.props
    const posts = data.allMdx.edges
    const totalCount = data.allMdx.totalCount

    return (
      <div>
        <SEO />

        <Header />

        <Container className="tags-page-container">
          <div className="tags-page">
            <h2>
              {" "}
              <u>
                {totalCount > 1
                  ? `${totalCount} posts tagged with ${pageContext.tag}`
                  : `${totalCount} post tagged with ${pageContext.tag}`}{" "}
              </u>{" "}
            </h2>

            {posts.map(({ node }) => {
              return (
                <div>
                  {/* <p>{node.frontmatter.title}</p> */}
                  <br />
                  <Card variant="light">
                    <Card.Body style={{ textAlign: "center" }}>
                      <Link to={node.frontmatter.slug} className="card-links">
                        <Card.Title>{node.frontmatter.title}</Card.Title>
                      </Link>
                      <Card.Text>{node.frontmatter.description}</Card.Text>
                      <Card.Text>
                        {this.getButtons(node.frontmatter.tags)}
                      </Card.Text>
                      <Card.Footer className="text-muted">
                        <FaPencilAlt size={20} /> {node.frontmatter.date}{" "}
                        <GoPrimitiveDot /> {node.fields.readingTime.text}{" "}
                        <GiPopcorn size={25} />{" "}
                      </Card.Footer>
                    </Card.Body>
                  </Card>

                  <br />
                </div>
              )
            })}

            <br />
            <p style={{ textAlign: "center", fontSize: "larger" }}>
              <Button variant="outline-success">
                <Link to="/tags/" style={{ color: "black" }}>
                  View All Tags
                </Link>
              </Button>
            </p>
          </div>
        </Container>

        <Footer />
      </div>
    )
  }
}

export default TagsList

export const tagQuery = graphql`
  query tagQuery($tag: String!) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            description
            slug
            tags
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
      totalCount
    }
  }
`
