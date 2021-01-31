import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import Theme from "prism-react-renderer/themes/nightOwl"

const Code = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : ""

  const Pre = styled.pre`
    margin: 1em 0;
    font-size: 1rem;
    overflow-x: auto;
    line-height: 1.55rem;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(198, 208, 235);
    border-radius: 10px;
    & .token-line {
      line-height: 1.3em;
      height: 1.5em;
    }

    @media (max-width: 600px) {
      max-height: 400px;
      padding: 25px 25px;
    }

    @media (min-width: 992px) {
      max-height: 700px;
      padding: 25px 80px;
    }

    @media (max-width: 992px) and (min-width: 600px) {
      max-height: 500px;
      padding: 25px 70px;
    }
  `

  const WrapperStyles = styled.div`
    margin-left: -50px;
    margin-right: -50px;
    @media (max-width: 820px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  `

  return (
    <Highlight
      {...defaultProps}
      theme={Theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <WrapperStyles>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </WrapperStyles>
      )}
    </Highlight>
  )
}

export default Code
