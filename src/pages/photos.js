//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"

//page specific components

import Tagline from "../components/00-shared/Tagline"

import Masonry from "react-masonry-css"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import SEO from "src/components/00-shared/Seo.js"
const MasonryItem = styled.div`
  position: relative;
  background: grey;
  margin-bottom: ${props =>
    `calc(0.5 * ${props.theme.spacing.padding.mobile}rem)`};
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
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0;
      line-height: 1.2;
      @media ${Breakpoint.lg} {
        font-size: 3rem;
      }
    }
    h3 {
      color: ${props => props.theme.colors.bright};
      font-size: 1.2rem;
      font-weight: 300;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      @media ${Breakpoint.lg} {
        font-size: 1.4rem;
      }
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
    margin-right: -1.5rem;
    flex-grow: 1;
    @media ${Breakpoint.lg} {
      margin-right: unset;
      margin-left: ${props => `${-1 * props.theme.spacing.padding.desktop}rem`};
    }
  }
  .my-masonry-grid_column {
    padding-left: ${props =>
      `calc(0.5 * ${props.theme.spacing.padding.mobile}rem)`}; /* gutter size */
    background-clip: padding-box;
    @media ${Breakpoint.lg} {
      padding-left: ${props => `${props.theme.spacing.padding.desktop}rem`};
    }
  }
`
const breakpointColumnsObj = {
  default: 4,
  1600: 3,
  960: 2,
}
const PhotosPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulGallery(sort: { fields: order, order: DESC }) {
          edges {
            node {
              title
              category
              id
              slug
              cover {
                gatsbyImageData(
                  width: 450
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
      <SEO
        title="photos"
        description="when I make pictures 
I connect to the people I shoot."
        url="https://lukashoppe.com/photos"
      />
      <Container>
        <Tagline
          text="when I make pictures 
I connect to the people I shoot."
        />
      </Container>
      <Container large>
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
