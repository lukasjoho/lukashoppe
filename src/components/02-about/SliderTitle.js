import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledSliderTitle = styled.h2`
  text-align: center;
  padding-bottom: 4rem;
  @media ${Breakpoint.lg} {
  }
`

const SliderTitle = ({ text }) => {
  return <StyledSliderTitle>{text}</StyledSliderTitle>
}

export default SliderTitle
