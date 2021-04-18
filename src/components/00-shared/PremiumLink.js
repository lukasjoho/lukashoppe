import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledLink = styled.a`
  cursor: pointer;
  font-weight: 400;
  color: ${props => props.theme.colors.dark};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: black;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
  }

  @media ${Breakpoint.lg} {
    &:after {
      width: 0%;
      height: 2px;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`

const PremiumLink = ({ href, children }) => {
  return (
    <StyledLink href={href} target="_blank">
      {children}
    </StyledLink>
  )
}

export default PremiumLink
