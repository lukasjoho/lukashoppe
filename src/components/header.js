import React from "react"
import styled from "styled-components"
const StyledHeader = styled.header`
  height: ${props => `${props.theme.spacing.layout.desktop}rem`};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
`
const Hamburger = styled.div`
  width: 2.2rem;
  height: 1.4rem;
  position: absolute;
  right: ${props => `${props.theme.spacing.padding.desktop}rem`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    height: 0.2rem;
    width: 100%;
    background: ${props => props.theme.colors.middlegrey};
    position: relative;
    &:first-child {
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      transform-origin: -50% 0%;
    }
  }
`

const Header = ({ handleToggle }) => (
  <StyledHeader>
    <p>Logo</p>
    <Hamburger onClick={handleToggle}>
      <div />

      <div />
    </Hamburger>
  </StyledHeader>
)

export default Header
