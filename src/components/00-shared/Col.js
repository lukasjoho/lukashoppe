import React from "react"
import styled from "styled-components"
const StyledCol = styled.div`
  padding: 0 ${props => `${props.theme.spacing.padding.desktop}rem`};
  width: 50%;
  background: yellow;
  display: flex;
  align-items: ${props => props.center && "center"};
`

const Col = ({ children, center }) => {
  return <StyledCol center={center}>{children}</StyledCol>
}

export default Col
