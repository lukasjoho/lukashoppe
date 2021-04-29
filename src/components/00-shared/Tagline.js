import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledTagline = styled.div`
  padding: 0rem 0 6rem;
  width: 100%;
  @media ${Breakpoint.lg} {
    padding: 4rem 0 12rem;
  }
  h1 {
    font-size: 2.8rem;
    @media ${Breakpoint.lg} {
      font-size: 4rem;
    }
  }
`
const Tagline = ({ text }) => {
  return (
    <StyledTagline>
      <h1>{text}</h1>
    </StyledTagline>
  )
}

export default Tagline
