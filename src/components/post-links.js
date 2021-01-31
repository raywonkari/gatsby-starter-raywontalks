import React from "react"
import { GoLinkExternal } from "react-icons/go"

export default props => (
  <a
    style={{ color: `${props.color ? props.color : "blue"}` }}
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.name}
    <GoLinkExternal />
  </a>
)
