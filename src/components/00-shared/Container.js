import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 0 ${props => `${props.theme.spacing.padding.mobile}rem`};
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  @media ${Breakpoint.lg} {
    max-width: ${props =>
      props.auto
        ? "1500px"
        : props.small
        ? "960px"
        : props.large
        ? "1500px"
        : "1200px"};
    padding: 0 ${props => `${props.theme.spacing.padding.desktop}rem`};
    width: ${props => props.auto && "auto"};
  }
`

const Container = ({ small, children, auto, large }) => {
  return (
    <StyledContainer large={large} small={small} auto={auto}>
      {children}
    </StyledContainer>
  )
}

export default Container
