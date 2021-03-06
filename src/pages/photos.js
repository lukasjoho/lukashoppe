//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"

//page specific components

import Tagline from "../components/00-shared/Tagline"

import ContentRow from "../components/00-shared/ContentRow"
import Image1 from "../images/photos/image-cover-moritz.jpg"
import Image2 from "../images/photos/image-cover-ischgl.jpg"
import Image3 from "../images/photos/image-cover-ingolstadt.jpg"
import Image4 from "../images/photos/image-cover-hockey.jpg"
import Masonry from "react-masonry-css"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const MasonryItem = styled.div`
  position: relative;
  background: grey;
  margin-bottom: ${props => `${props.theme.spacing.padding.mobile}rem`};
  @media ${Breakpoint.lg} {
    margin-bottom: ${props => `${props.theme.spacing.padding.desktop}rem`};
  }
  font-size: 0;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => `${props.theme.colors.dark}99`};
    opacity: 0;
    transition: 0.5s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    h2,
    h3 {
      text-align: center;
    }
    h2 {
      color: ${props => props.theme.colors.bright};
      font-size: 3rem;
      font-weight: 500;
    }
    h3 {
      color: ${props => props.theme.colors.middlegrey};
      font-size: 1.4rem;
      font-weight: 300;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`
const StyledMasonry = styled(Masonry)`
  &.my-masonry-grid {
    display: flex;
    margin-left: ${props =>
      `${-1 * props.theme.spacing.padding.mobile}rem`}; /* gutter size offset */
    width: 100%;
    flex-grow: 1;
    @media ${Breakpoint.lg} {
      margin-left: ${props => `${-1 * props.theme.spacing.padding.desktop}rem`};
    }
  }
  .my-masonry-grid_column {
    padding-left: ${props =>
      `${props.theme.spacing.padding.mobile}rem`}; /* gutter size */
    background-clip: padding-box;
    @media ${Breakpoint.lg} {
      padding-left: ${props => `${props.theme.spacing.padding.desktop}rem`};
    }
  }
`
const breakpointColumnsObj = {
  default: 3,
  960: 1,
}
const PhotosPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulGallery {
          edges {
            node {
              title
              category
              id
              slug
              cover {
                gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Container>
        <Tagline
          text="when I make pictures 
I connect to the people I shoot."
        />

        <StyledMasonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allContentfulGallery.edges.map(edge => {
            return (
              <MasonryItem key={edge.node.id}>
                <Link to={`/photos/${edge.node.slug}`}>
                  <GatsbyImage
                    image={getImage(edge.node.cover.gatsbyImageData)}
                  />
                  <div className="overlay">
                    <div>
                      <h2>{edge.node.title}</h2>
                      <h3>{edge.node.category}</h3>
                    </div>
                  </div>
                </Link>
              </MasonryItem>
            )
          })}
        </StyledMasonry>
      </Container>
    </>
  )
}

export default PhotosPage
