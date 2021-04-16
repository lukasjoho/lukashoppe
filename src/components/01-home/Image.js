import React from "react"
import ImageProfile from "../../images/image-lukas.jpg"
import styled from "styled-components"
const StyledImage = styled.div`
  height: 33rem;
  width: 33rem;
  margin-right: 6rem;
  flex-shrink: 0;
  img {
    width: 100%;
  }
`
const Image = () => {
  return (
    <StyledImage>
      <img src={ImageProfile} alt="" />
    </StyledImage>
  )
}

export default Image
