import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
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
  @media ${Breakpoint.lg} {
    width: auto;
    font-size: 1.8rem;
  }
`
const Button = ({ text, href, handleToggle }) => {
  return (
    <>
      {handleToggle && (
        <StyledButton onClick={handleToggle}>{text}</StyledButton>
      )}
      {href && (
        <a
          href={href}
          target="_blank"
          style={{
            alignSelf: "flex-start",
          }}
        >
          <StyledButton>{text}</StyledButton>
        </a>
      )}
    </>
  )
}

export default Button
