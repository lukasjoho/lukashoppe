import React from "react"
import styled from "styled-components"

const StyledFullPage = styled.div`
  height: ${props =>
    `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
  display: flex;
  justify-content: center;
  align-items: center;
`
const FullPage = ({ children }) => {
  return <StyledFullPage>{children}</StyledFullPage>
}

export default FullPage
