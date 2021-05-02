import React, { useEffect } from "react"
import FullPage from "../components/00-shared/FullPage"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Container from "../components/00-shared/Container"
import IconArrow from "src/images/icons/icon-arrow.svg"
import IconArrowDark from "src/images/icons/icon-arrow-dark.svg"
import InstagramEmbed from "react-instagram-embed"
import SEO from "src/components/00-shared/Seo.js"
export const query = graphql`
  query($slug: String!) {
    contentfulFilm(slug: { eq: $slug }) {
      title
      category
      youtube

      instagram
      video {
        file {
          url
        }
      }
      vertical
      slug
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
    font-size: 1.4rem;
  }
`
const StyledBack = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  color: ${props => props.theme.colors.middlegrey};
  font-weight: 300;
  transition: 0.3s ease;
  position: relative;
  p {
    margin: 0;
  }
  .dark,
  .default {
    transition: 0.3s ease;
  }
  .dark {
    position: absolute;
    left: 0;
    opacity: 0;
  }
  .default {
    position: relative;
    opacity: 1;
  }
  &:hover {
    color: ${props => props.theme.colors.dark};
    .dark,
    .default {
      transform: translateX(-0.5rem);
    }
    .dark {
      opacity: 1;
    }
    .default {
      opacity: 0;
    }
  }
  img {
    margin-right: 1rem;
  }
`
const StyledVideo = styled.div`
  max-width: 720px;
  &.vertical {
    max-width: 400px;
  }
  video {
    width: 100%;
    outline: none;
  }
`
const StyledFilm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const StyledInstagram = styled.div`
  font-size: 0;
  display: flex;
  justify-content: center;
  iframe {
    background: red;
  }
`
const Youtube = ({ link }) => {
  return (
    <StyledYoutube>
      <iframe
        src={link}
        width="100%"
        height="100%"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </StyledYoutube>
  )
}
const Vimeo = ({ link }) => {
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
const capitalize = input => {
  const words = input.split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  const output = words.join(" ")
  return output
}
const Film = props => {
  return (
    <>
      <SEO
        title={capitalize(props.data.contentfulFilm.title)}
        description="A film by Lukas Hoppe."
        url={`https://lukashoppe.com/films/${props.data.contentfulFilm.slug}`}
      />
      <FullPage autoall>
        {/* <FullPage autoall={props.data.contentfulFilm.instagram && true}> */}
        <Container small>
          <StyledFilm>
            <StyledHeader>
              <p>{props.data.contentfulFilm.category}</p>
              <h1>{props.data.contentfulFilm.title}</h1>
            </StyledHeader>
            {props.data.contentfulFilm.youtube && (
              <Youtube link={props.data.contentfulFilm.youtube} />
            )}
            {/* {props.data.contentfulFilm.vimeo && (
            <Vimeo link={props.data.contentfulFilm.vimeo} />
          )} */}
            {props.data.contentfulFilm.instagram && (
              <>
                <StyledInstagram>
                  <InstagramEmbed
                    url={props.data.contentfulFilm.instagram}
                    clientAccessToken="307951190929031|a0e4ae1229fe77901ee400e732645034"
                    maxWidth={375}
                    hideCaption={true}
                    containerTagName="div"
                    protocol=""
                    injectScript
                    onLoading={() => console.log("loading ...")}
                    onSuccess={() => console.log("succeeded")}
                    onAfterRender={() => console.log("rendered")}
                    onFailure={() => console.log("failed")}
                  />
                </StyledInstagram>
              </>
            )}
            {props.data.contentfulFilm.video && (
              <>
                <StyledVideo
                  className={props.data.contentfulFilm.vertical && "vertical"}
                >
                  <video
                    autoplay
                    src={props.data.contentfulFilm.video.file.url}
                    controls
                  />
                </StyledVideo>
              </>
            )}

            {/* <Link to="/films">
              <StyledBack>
                <img className="default" src={IconArrow} alt="" height="16px" />
                <img
                  className="dark"
                  src={IconArrowDark}
                  alt=""
                  height="16px"
                />
                <p>Back To All</p>
              </StyledBack>
            </Link> */}
          </StyledFilm>
        </Container>
      </FullPage>
    </>
  )
}

export default Film
