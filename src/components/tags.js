import React from "react"
import "./tags.css"
import { StaticQuery, graphql, Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

export function getButtons(group) {
  return group
    .sort(function (a, b) {
      return b.totalCount - a.totalCount
    })
    .map(tag => {
      return (
        <Button
          variant="outline-success"
          style={{ margin: "8px", fontSize: "large" }}
        >
          {" "}
          <Link style={{ color: "inherit" }} to={`/tags/${tag.fieldValue}/`}>
            {" "}
            {tag.fieldValue} ({tag.totalCount}){" "}
          </Link>{" "}
        </Button>
      )
    })
}

export function countTags(group) {
  return group.length
}

function Tags() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
        <div className="tags">
          <Container style={{ maxWidth: "600px" }}>
            <h1>
              {" "}
              <u>{countTags(data.allMdx.group)} Tags </u>{" "}
            </h1>
            <p> (Click to see related posts) </p>
            <br />
            <div>{getButtons(data.allMdx.group)}</div>
            <br />
          </Container>
        </div>
      )}
    />
  )
}

export default Tags
