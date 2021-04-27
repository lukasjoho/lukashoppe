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
import PremiumLink from "../components/00-shared/PremiumLink"

const AboutPage = () => {
  const { image1, image2, image3 } = useStaticQuery(graphql`
    query {
      image2: file(relativePath: { eq: "about/image-lukas-erzaehlt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image1: file(relativePath: { eq: "about/image-lukas-berlin.jpg" }) {
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
        <Tagline text="while I like the process of perfecting the work I am more excited about the environment I am working in and the people and ideas I meet along the way. " />
        <ContentRow
          text={
            <>
              For me, creating cool digital products is a continuing process of
              learning and exploring. There is no set of rules for getting the
              ‘perfect’ work. As with everything else it is excercise and
              experience. Looking at the finished work, for me, that is
              meaningful.
              <br />
              I’m Lukas and I love meeting new interesting people and creating
              something with them together!.
            </>
          }
          image={getImage(image1.childImageSharp.gatsbyImageData)}
          center
        />

        <BuildSlider />
        <ContentRow
          text={
            <>
              The era of digital technology is changing the types of products
              and services, the process of value creation and tools that enable
              us to to use and apply our own ideas and imagination.
              <br />I want to use the full range of digital tools I have at my
              hands and blend them with my creativity to create great content
              for other peoples ideas, for start ups, businesses and my personal
              projects.
            </>
          }
          image={getImage(image2.childImageSharp.gatsbyImageData)}
          center
          reverse
        />

        <TestimonialSlider />
        {/* <ContentRow
          text="The real hidden benefit of my work has always been the fulfilment I get when communicating with the people I work with. Whether its sports, music, nature or corporate and business stuff: I get to know what the individuals do, what they are passionate about and what they breathe for. While I like the process of perfecting the work I am more excited about the environment I am working in and the people and ideas I meet along the way. ."
          image={getImage(image3.childImageSharp.gatsbyImageData)}
          center
        /> */}
        <ContentRow
          text={
            <>
              During my studies I founded the technology studio Excyted. We turn
              ideas into eye-popping reality by utilizing our creativity and
              latest technology concepts in web development and media
              production. We want to excite people by being fast and creative
              and by building digital products that people truly want to play
              and interact with. Excyted is currently being run by my colleague
              Antonio.
              <br />
              <PremiumLink href="https://excyted.io">
                Visit excyted.io
              </PremiumLink>
            </>
          }
          image={getImage(image3.childImageSharp.gatsbyImageData)}
          center
        />
      </Container>
    </>
  )
}

export default AboutPage
