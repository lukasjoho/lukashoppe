import React from "react"
import styled from "styled-components"
const StyledTitle = styled.h1`
  color: ${props => props.theme.colors.bright};
  height: 6rem;
  padding: 0 4rem;
  font-size: inherit;
  border: none;
  font-family: inherit;
`
const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>
}

export default Title
