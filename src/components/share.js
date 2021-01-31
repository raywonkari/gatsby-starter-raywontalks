import React from "react"
import "./share.css"
import Button from "react-bootstrap/Button"

class SocialShare extends React.Component {
  // title, tags and link

  getTwitterUrl(title, slug) {
    const url = `https://raywontalks.com${slug}`
    const encodedtitle = `${encodeURIComponent(title)}`

    return `https://twitter.com/share?text=${encodedtitle}&url=${encodeURIComponent(
      url
    )}&via=raywonkari`
  }

  getFacebookUrl(slug) {
    const url = `https://raywontalks.com${slug}`

    return `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  }

  getLinkedinUrl(slug) {
    const url = `https://raywontalks.com${slug}`

    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`
  }

  getEmailHref(title, slug) {
    return `mailto:?Subject=I found this article interesting => ${title}&body=Link: https://raywontalks.com${slug}`
  }

  emailMeHref(title) {
    return `mailto:its@raywonkari.com?Subject=I have read your article ${title}, and I want to talk to you`
  }

  render() {
    return (
      <div className="share-box">
        <h5>
          If you learnt something by reading my article{" "}
          <i>
            <u>{this.props.title}</u>
          </i>
          , please consider sharing it.
        </h5>

        <Button
          style={{
            margin: "10px",
            padding: "3px 5px",
            backgroundColor: "#0e76a8",
          }}
        >
          <a
            style={{ color: "inherit" }}
            href={this.getLinkedinUrl(this.props.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
        <Button
          style={{
            margin: "10px",
            padding: "3px 5px",
            backgroundColor: "#00acee",
          }}
        >
          <a
            style={{ color: "inherit", zIndex: "1 !important" }}
            href={this.getTwitterUrl(this.props.title, this.props.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Button>
        <Button
          style={{
            margin: "10px",
            padding: "3px 5px",
            backgroundColor: "#3b5998",
          }}
        >
          <a
            style={{ color: "inherit" }}
            href={this.getFacebookUrl(this.props.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </Button>
        <Button
          style={{
            margin: "10px",
            padding: "3px 5px",
            backgroundColor: "#d44638",
          }}
        >
          <a
            style={{ color: "inherit" }}
            href={this.getEmailHref(this.props.title, this.props.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </Button>

        <h6>- - - - - - - - - - - - - - - - - - - - - - -</h6>

        <h5>Want to stay in touch?</h5>
        <a
          href="https://twitter.com/raywonkari"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <h6 style={{ color: "#00acee" }}>Follow me on Twitter</h6>
        </a>
        <a
          href="https://linkedin.com/in/raywonkari"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <h6 style={{ color: "#0e76a8" }}>Connect with me on Linkedin</h6>
        </a>
        <a
          href={this.emailMeHref(this.props.title)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <h6 style={{ color: "#d44638" }}>Send me an email</h6>
        </a>

        <h6>- - - - - - - - - - - - - - - - - - - - - - -</h6>

        <p>
          {" "}
          Thanks{" "}
          <a
            style={{ color: "black" }}
            href="https://instagram.com/happimage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <b>
              <u>Happimage</u>
            </b>{" "}
          </a>{" "}
          for the cover art.
        </p>
      </div>
    )
  }
}

export default SocialShare
