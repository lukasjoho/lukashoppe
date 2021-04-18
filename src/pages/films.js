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
import Col from "../components/00-shared/Col"
import Row from "../components/00-shared/Row"
import IconPlay from "src/images/icons/icon-play.svg"

const StyledFilmContainer = styled.div`
  margin: 0 ${props => `calc(-1 * ${props.theme.spacing.padding.mobile}rem)`};

  width: 100%;
  flex-grow: 1;
  flex-wrap: wrap;

  @media ${Breakpoint.lg} {
    margin: 0 ${props => `calc(-1 * ${props.theme.spacing.padding.desktop}rem)`};
    display: flex;
  }
`
const StyledItem = styled.div`
  width: 100%;
  margin-bottom: ${props =>
    `calc(2 * ${props.theme.spacing.padding.mobile}rem)`};
  @media ${Breakpoint.lg} {
    margin-bottom: ${props =>
      `calc(2 * ${props.theme.spacing.padding.desktop}rem)`};
  }
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .caption {
    margin-top: 1rem;
    h2 {
      margin: 0;
      line-height: 1.2;
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: 300;
      color: ${props => props.theme.colors.middlegrey};
    }
  }

  .thumbnail {
    position: relative;
    font-size: 0;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => `${props.theme.colors.dark}99`};
      opacity: 0;
      transition: 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      > * {
        width: 4rem;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`
const Item = ({ children }) => {
  return <StyledItem>{children}</StyledItem>
}
const FilmsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulFilm {
          edges {
            node {
              title
              category
              id
              slug
              thumbnail {
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
        <Tagline text="when making films I go with the flow. I create atmospheres." />
        <StyledFilmContainer>
          {data.allContentfulFilm.edges.map(edge => {
            return (
              <Col>
                <Item key={edge.node.id}>
                  <Link to={`/films/${edge.node.slug}`}>
                    <div className="thumbnail">
                      <GatsbyImage
                        image={getImage(edge.node.thumbnail.gatsbyImageData)}
                      />
                      <div className="overlay">
                        <img src={IconPlay} alt="" />
                      </div>
                    </div>
                    <div className="caption">
                      <h2>{edge.node.title}</h2>
                      <h3>{edge.node.category}</h3>
                    </div>
                  </Link>
                </Item>
              </Col>
            )
          })}
        </StyledFilmContainer>
      </Container>
    </>
  )
}

export default FilmsPage
