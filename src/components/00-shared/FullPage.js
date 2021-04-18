import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
const StyledFullPage = styled.div`
  height: ${props => `calc(100vh - 2*${props.theme.spacing.layout.mobile}rem)`};

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 33rem;
  position: relative;
  &.heightauto {
    height: auto;
  }
  @media ${Breakpoint.lg} {
    height: ${props =>
      `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
    &.heightauto {
      height: ${props =>
        `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
    }
  }
`
const FullPage = ({ children, auto }) => {
  return (
    <StyledFullPage className={auto && "heightauto"}>{children}</StyledFullPage>
  )
}

export default FullPage
