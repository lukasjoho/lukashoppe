import React from "react"
import ImageProfile from "../../images/image-lukas.jpg"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
const StyledImage = styled.div`
  width: 100%;
  margin-right: 0rem;
  flex-shrink: 0;
  font-size: 0;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  @media ${Breakpoint.lg} {
    margin-top: 0rem;
    height: 33rem;
    width: 33rem;
    margin-right: 6rem;
    margin-bottom: 0rem;
  }
  img {
    width: 100%;
  }
`

const Image = props => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-lukas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  return (
    <StyledImage>
      <GatsbyImage image={getImage(image.childImageSharp.gatsbyImageData)} />
    </StyledImage>
  )
}

export default Image
