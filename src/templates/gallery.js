import React from "react"
import FullPage from "../components/00-shared/FullPage"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: lightblue;
  display: flex;
  align-self: stretch;
`
const StyledImage = styled.div``
export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      category
      images {
        gatsbyImageData(
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
const Gallery = props => {
  return (
    <FullPage>
      <Container>
        {props.data.contentfulGallery.images.map(image => {
          return (
            <StyledImage>
              <GatsbyImage image={getImage(image.gatsbyImageData)} />
            </StyledImage>
          )
        })}
        {props.data.contentfulGallery.images.map(image => {
          return (
            <StyledImage>
              <GatsbyImage image={getImage(image.gatsbyImageData)} />
            </StyledImage>
          )
        })}
      </Container>
    </FullPage>
  )
}

export default Gallery
