import React from "react"
import styled from "styled-components"
const StyledContainer = styled.div`
  max-width: ${props => (props.small ? "960px" : "1200px")};
  margin: auto;
  padding: 0 4rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  width: ${props => props.auto && "auto"};
`

const Container = ({ small, children, auto }) => {
  return (
    <StyledContainer small={small} auto={auto}>
      {children}
    </StyledContainer>
  )
}

export default Container
