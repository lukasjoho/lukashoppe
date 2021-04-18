import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import { GatsbyImage } from "gatsby-plugin-image"
const StyledImage = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0;

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

export const BlogImage = ({ image, inline }) => {
  return (
    <StyledImage className={inline && "inline"}>
      <GatsbyImage image={image} />
    </StyledImage>
  )
}
