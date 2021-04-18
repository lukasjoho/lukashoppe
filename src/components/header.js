import React from "react"
import styled from "styled-components"
import IconLogo from "src/images/icons/icon-lh.svg"
import IconLogoBright from "src/images/icons/icon-lh-bright.svg"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledHeader = styled.header`
  height: ${props => `${props.theme.spacing.layout.mobile}rem`};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  @media ${Breakpoint.lg} {
    height: ${props => `${props.theme.spacing.layout.desktop}rem`};
  }
`
const Hamburger = styled.div`
  width: 2.2rem;
  height: 1.4rem;
  position: absolute;
  right: ${props => `${props.theme.spacing.padding.mobile}rem`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${Breakpoint.lg} {
    right: ${props => `${props.theme.spacing.padding.desktop}rem`};
  }
  cursor: pointer;
  div {
    height: 0.2rem;
    width: 100%;
    background: ${props => props.theme.colors.dark};
    position: relative;
  }
  &.isOpen {
    div {
      background: ${props => props.theme.colors.bright};
    }
  }
`
const StyledLogo = styled.div`
  height: 3rem;
  @media ${Breakpoint.lg} {
    height: 4rem;
  }
`

const Header = ({ handleToggle, isOpen }) => (
  <StyledHeader>
    <StyledLogo>
      {isOpen ? (
        <img src={IconLogoBright} alt="" height="100%" />
      ) : (
        <img src={IconLogo} alt="" height="100%" />
      )}
    </StyledLogo>
    <Hamburger onClick={handleToggle} className={isOpen && "isOpen"}>
      <div />

      <div />
    </Hamburger>
  </StyledHeader>
)

export default Header
