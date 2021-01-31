import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"
import { FiMenu } from "react-icons/fi"
import { StaticQuery, graphql } from "gatsby"

export function countTags(group) {
  return group.length
}

function Header() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx {
            totalCount
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
        <Row>
          <Navbar
            className="navbar-laptop border-bottom"
            id="laptop"
            fixed="top"
          >
            <Navbar.Brand id="navbar-brand-laptop" href="/">
              {" "}
              <FaChevronLeft /> raywon talks <FaChevronRight />{" "}
            </Navbar.Brand>
            <Nav>
              <Nav.Link
                id="nav-links-laptop"
                href="https://raywonkari.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About <GoLinkExternal />
              </Nav.Link>
              <Nav.Link id="nav-links-laptop" href="/articles">
                Articles ({data.allMdx.totalCount})
              </Nav.Link>
              <Nav.Link id="nav-links-laptop" href="/tags">
                Tags ({countTags(data.allMdx.group)})
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto header-subscribe-laptop">
              <Nav.Link id="nav-links-subscribe-laptop" href="/subscribe/">
                Subscribe
              </Nav.Link>
            </Nav>
          </Navbar>

          <Navbar
            className="navbar-tablet border-bottom"
            id="tablet"
            fixed="top"
          >
            <Navbar.Brand id="navbar-brand-tablet" href="/">
              {" "}
              <FaChevronLeft /> raywon talks <FaChevronRight />{" "}
            </Navbar.Brand>
            <DropdownButton
              alignRight
              variant="light"
              title={<FiMenu size={30} />}
              className="header-dropdown-tablet"
            >
              <Dropdown.Item
                href="https://raywonkari.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About <GoLinkExternal />
              </Dropdown.Item>
              <Dropdown.Item href="/articles">
                Articles ({data.allMdx.totalCount})
              </Dropdown.Item>
              <Dropdown.Item href="/tags">
                Tags ({countTags(data.allMdx.group)})
              </Dropdown.Item>
              <Dropdown.Item href="/subscribe">Subscribe</Dropdown.Item>
            </DropdownButton>
          </Navbar>

          <Navbar
            className="navbar-mobile border-bottom"
            id="mobile"
            fixed="top"
          >
            <Navbar.Brand id="navbar-brand-mobile" href="/">
              {" "}
              <FaChevronLeft /> raywon talks <FaChevronRight />{" "}
            </Navbar.Brand>
            <DropdownButton
              alignRight
              variant="light"
              title={<FiMenu size={30} />}
            >
              <Dropdown.Item
                href="https://raywonkari.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About <GoLinkExternal />
              </Dropdown.Item>
              <Dropdown.Item href="/articles">
                Articles ({data.allMdx.totalCount})
              </Dropdown.Item>
              <Dropdown.Item href="/tags">
                Tags ({countTags(data.allMdx.group)})
              </Dropdown.Item>
              <Dropdown.Item href="/subscribe">Subscribe</Dropdown.Item>
            </DropdownButton>
          </Navbar>
        </Row>
      )}
    />
  )
}

export default Header
