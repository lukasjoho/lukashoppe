import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledRow = styled.div`
  margin: 0 ${props => `calc(-1 * ${props.theme.spacing.padding.mobile}rem)`};
  display: flex;
  width: 100%;
  flex-grow: 1;
  padding-bottom: 6rem;
  flex-direction: column;
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media ${Breakpoint.lg} {
    margin: 0
      ${props => `calc(-1 * ${props.theme.spacing.padding.desktop / 2}rem)`};
    flex-direction: row;
    padding-bottom: 8rem;
  }
`

const BlogRow = ({ children }) => {
  return <StyledRow>{children}</StyledRow>
}

export default BlogRow
