import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledHead = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 1rem;
    @media ${Breakpoint.lg} {
      margin-bottom: 0rem;
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
  }
  @media ${Breakpoint.lg} {
    margin-bottom: 4rem;
  }
`
const StyledTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.middlegrey};
  background: ${props => `${props.theme.colors.lightgrey}`};
  margin-right: 1rem;
  padding: 0 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
`
const Tag = ({ text }) => {
  return <StyledTag>{text}</StyledTag>
}

const BlogHead = ({ title, tags }) => {
  return (
    <StyledHead>
      <h1>{title}</h1>
      <div className="tags">
        {tags.map(tag => (
          <Tag text={tag} />
        ))}
      </div>
    </StyledHead>
  )
}

export default BlogHead
