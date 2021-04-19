//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"
import Row from "../components/00-shared/Row"
//page specific components

import Textblock from "../components/00-shared/Textblock"
import Tagline from "../components/00-shared/Tagline"
import Col from "../components/00-shared/Col"

import ContentRow from "../components/00-shared/ContentRow"
import BuildSlider from "../components/02-about/BuildSlider"
import TestimonialSlider from "../components/02-about/TestimonialSlider"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const AboutPage = () => {
  const { image1, image2, image3 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "about/image-lukas-erzaehlt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image2: file(relativePath: { eq: "about/image-lukas-erzaehlt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image3: file(relativePath: { eq: "about/image-lukas-erzaehlt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <Tagline text="while I like the process of nailing the work I am more excited about the environment I am working in and the people and ideas I meet along the way. " />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          image={getImage(image1.childImageSharp.gatsbyImageData)}
          center
        />
        <BuildSlider />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          image={getImage(image2.childImageSharp.gatsbyImageData)}
          reverse
          center
        />
        <TestimonialSlider />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          image={getImage(image3.childImageSharp.gatsbyImageData)}
          center
        />
      </Container>
    </>
  )
}

export default AboutPage
