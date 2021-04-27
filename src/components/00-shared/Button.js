import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import { Link } from "gatsby"

const StyledButton = styled.button`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.bright};
  height: 6rem;
  padding: 0 4rem;
  font-size: 1.6rem;
  border: none;
  font-family: inherit;
  width: 100%;
  cursor: pointer;
  outline: none;
  &:hover {
    filter: brightness(200%);
  }
  @media ${Breakpoint.lg} {
    width: auto;
    font-size: 1.8rem;
  }
`
const StyledLink = styled.a`
  @media ${Breakpoint.lg} {
    align-self: flex-start;
  }
`
const Button = ({ text, href, handleToggle, link }) => {
  return (
    <>
      {handleToggle && (
        <StyledButton onClick={handleToggle}>{text}</StyledButton>
      )}
      {href && (
        <StyledLink href={href} target="_blank">
          <StyledButton>{text}</StyledButton>
        </StyledLink>
      )}
      {link && (
        <Link to={link}>
          <StyledButton>{text}</StyledButton>
        </Link>
      )}
    </>
  )
}

export default Button
