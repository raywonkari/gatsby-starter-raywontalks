import React from "react"
import { Link } from "gatsby"
import { GoLink } from "react-icons/go"

export default props => (
  <section id={props.id}>
    <hr />
    <br />
    <h3>
      {" "}
      {props.title}{" "}
      <Link style={{ color: "inherit" }} to={props.slug + "#" + props.id}>
        {" "}
        <GoLink />{" "}
      </Link>{" "}
    </h3>
    <br />
  </section>
)
