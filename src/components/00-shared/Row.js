import React from "react"
import styled from "styled-components"
const StyledRow = styled.div`
  margin: 0 ${props => `calc(-1 * ${props.theme.spacing.padding.desktop}rem)`};
  display: flex;
  width: 100%;
  flex-grow: 1;
  background: orange;
  flex-direction: ${props => props.reverse && "row-reverse"};
`

const Row = ({ children, reverse }) => {
  return <StyledRow reverse={reverse}>{children}</StyledRow>
}

export default Row
