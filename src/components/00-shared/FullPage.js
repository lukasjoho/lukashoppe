import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
const StyledFullPage = styled.div`
  min-height: ${props =>
    `calc(100vh - 2*${props.theme.spacing.layout.mobile}rem)`};
  height: ${props => `calc(100vh - 2*${props.theme.spacing.layout.mobile}rem)`};

  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 33rem; */
  position: relative;
  &.heightauto {
    height: auto;
  }
  &.autoall {
    height: auto;
  }
  @media ${Breakpoint.lg} {
    min-height: ${props =>
      `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
    height: ${props =>
      `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
    &.heightauto {
      height: auto;
      height: ${props =>
        `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
    }
    &.autoall {
      height: auto;
    }
  }
`
const FullPage = ({ children, auto, autoall }) => {
  return (
    <StyledFullPage
      className={(auto && "heightauto") || (autoall && "autoall")}
    >
      {children}
    </StyledFullPage>
  )
}

export default FullPage
