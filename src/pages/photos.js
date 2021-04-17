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
import "../components/03-photos/masonry.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const MasonryItem = styled.div`
  position: relative;
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

        <Masonry
          breakpointCols={3}
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

          {/* <div>
            <img src={Image1} alt="" width="100%" />
          </div>
          <div>
            <img src={Image2} alt="" width="100%" />
          </div>
          <div>
            <img src={Image3} alt="" width="100%" />
          </div>
          <div>
            <img src={Image1} alt="" width="100%" />
          </div>
          <div>
            <img src={Image2} alt="" width="100%" />
          </div>
          <div>
            <img src={Image3} alt="" width="100%" />
          </div> */}
        </Masonry>
      </Container>
    </>
  )
}

export default PhotosPage
