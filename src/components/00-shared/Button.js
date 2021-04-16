import React from "react"
import styled from "styled-components"
const StyledButton = styled.button`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.bright};
  height: 6rem;
  padding: 0 4rem;
  font-size: inherit;
  border: none;
  font-family: inherit;
`
const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

export default Button
