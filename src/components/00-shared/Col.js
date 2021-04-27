import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledCol = styled.div`
  padding: 0 ${props => `${props.theme.spacing.padding.mobile}rem`};
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.center ? "center" : "flex-start")};
  box-sizing: border-box;
  width: 100%;

  @media ${Breakpoint.lg} {
    padding: 0 ${props => `${props.theme.spacing.padding.desktop}rem`};
    width: 50%;
    &.small {
      width: 40%;
    }
    &.large {
      width: 60%;
    }
    &.full {
      width: 100%;
    }
  }
`

const Col = ({ children, center, small, large, full }) => {
  return (
    <StyledCol
      center={center}
      className={(small && "small") || (large && "large") || (full && "full")}
    >
      {children}
    </StyledCol>
  )
}

export default Col
