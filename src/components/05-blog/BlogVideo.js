import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import { GatsbyImage } from "gatsby-plugin-image"
const StyledVideo = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0;
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: grey;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
  }

  @media ${Breakpoint.lg} {
    margin-bottom: 0rem;
  }
  &.inline {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
    @media ${Breakpoint.lg} {
      margin-bottom: 2rem;
    }
  }
`

export const BlogVideo = ({ url, inline }) => {
  return (
    <StyledVideo className={inline && "inline"}>
      <iframe
        width="100%"
        height="100%"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </StyledVideo>
  )
}
