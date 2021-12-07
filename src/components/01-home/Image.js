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
  position: relative;
  .gatsby-image-wrapper-constrained {
    width: 100%;
    > div {
      max-width: 100% !important;
    }
  }

  /* &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  > {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  } */
  @media ${Breakpoint.lg} {
    margin-top: 0rem;
    height: 33rem;
    width: 33rem;
    margin-right: 6rem;
    margin-bottom: 0rem;
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
            quality: 90
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
