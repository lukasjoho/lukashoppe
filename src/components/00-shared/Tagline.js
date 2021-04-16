import React from "react"
import styled from "styled-components"
const StyledTagline = styled.div`
  padding: 4rem 0 12rem;
  background: violet;
  h1 {
    font-size: 4rem;
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
