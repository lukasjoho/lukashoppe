import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
const StyledRow = styled.div`
  margin: 0 ${props => `calc(-1 * ${props.theme.spacing.padding.mobile}rem)`};
  display: flex;
  width: 100%;
  flex-grow: 1;

  flex-direction: ${props =>
    props.reverseMobile ? "column-reverse" : "column"};

  @media ${Breakpoint.lg} {
    margin: 0 ${props => `calc(-1 * ${props.theme.spacing.padding.desktop}rem)`};
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
`

const Row = ({ children, reverse, reverseMobile }) => {
  return (
    <StyledRow reverse={reverse} reverseMobile={reverseMobile}>
      {children}
    </StyledRow>
  )
}

export default Row
