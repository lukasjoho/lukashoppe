import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${props => (props.small ? "960px" : "1200px")};
  margin: auto;
  padding: 0 ${props => `${props.theme.spacing.padding.mobile}rem`};
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  @media ${Breakpoint.lg} {
    padding: 0 ${props => `${props.theme.spacing.padding.desktop}rem`};
    width: ${props => props.auto && "auto"};
  }
`

const Container = ({ small, children, auto }) => {
  return (
    <StyledContainer small={small} auto={auto}>
      {children}
    </StyledContainer>
  )
}

export default Container
