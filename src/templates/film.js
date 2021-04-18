import React, { useEffect } from "react"
import FullPage from "../components/00-shared/FullPage"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Container from "../components/00-shared/Container"
import IconArrow from "src/images/icons/icon-arrow.svg"
export const query = graphql`
  query($slug: String!) {
    contentfulFilm(slug: { eq: $slug }) {
      title
      category
      youtube
    }
  }
`
const StyledYoutube = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: lightgrey;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => `${props.theme.spacing.padding.desktop}rem`};
  h1 {
    line-height: 1.2;
  }
  p {
    margin: 0;
  }
`
const StyledBack = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  color: ${props => props.theme.colors.middlegrey};
  img {
    margin-right: 1rem;
  }
`
const StyledFilm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Youtube = ({ link }) => {
  return (
    <StyledYoutube>
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </StyledYoutube>
  )
}
const Film = props => {
  return (
    <FullPage>
      <Container small>
        <StyledFilm>
          <StyledHeader>
            <p>{props.data.contentfulFilm.category}</p>
            <h1>{props.data.contentfulFilm.title}</h1>
          </StyledHeader>
          {props.data.contentfulFilm.youtube && (
            <Youtube link={props.data.contentfulFilm.youtube} />
          )}

          <Link to="/films">
            <StyledBack>
              <img src={IconArrow} alt="" height="16px" />
              Back To All
            </StyledBack>
          </Link>
        </StyledFilm>
      </Container>
    </FullPage>
  )
}

export default Film
