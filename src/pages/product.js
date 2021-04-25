//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"

//page specific components

import Tagline from "../components/00-shared/Tagline"

import ContentRow from "../components/00-shared/ContentRow"
import Image1 from "../images/product/image-biersafe.jpg"
import Image2 from "../images/product/image-nikolas.jpg"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const ProductPage = () => {
  const {
    imageBonvelo,
    imageBiersafe,
    imageNikolas,
    imageExcyted,
    imageSustragil,
    imageNewschool,
    imageLh,
  } = useStaticQuery(graphql`
    query {
      imageBonvelo: file(relativePath: { eq: "product/image-bonvelo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageSustragil: file(
        relativePath: { eq: "product/image-sustragil.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageNikolas: file(relativePath: { eq: "product/image-nikolas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageBiersafe: file(relativePath: { eq: "product/image-biersafe.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageExcyted: file(relativePath: { eq: "product/image-excyted.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageNewschool: file(relativePath: { eq: "product/image-school.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageLh: file(relativePath: { eq: "product/image-lh.jpg" }) {
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
        <Tagline
          text="passionate about developing digital products.
i believe that the art of building is the art of listening to your customer"
        />
        <ContentRow
          subtitle="e-commerce"
          title="bikeshop design concept"
          text="As a weekend side project I redesigned the product page of bonvelo's online shop. I wanted to put my prototyping capabilities to the test. After redesigning the page for 4h with Figma I coded a high-fidelity prototype another 4 hours with NextJS. I spent the last 6h of my weekend to create a video where I explain my thought process behind the design in 100 seconds."
          href="https://biersafe.netlify.app/"
          button="see more"
          image={getImage(imageBonvelo.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="e-commerce"
          title="biersafe"
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageBiersafe.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="personal crypto website"
          title="about nik"
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageNikolas.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="school website"
          title="new school"
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://aboutnik.com/"
          button="visit newschool"
          image={getImage(imageNewschool.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="startup landing page"
          title="sustragil"
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://sustragil.com/"
          button="visit sustragil"
          image={getImage(imageSustragil.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="agency website"
          title="excyted"
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageExcyted.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="my very own personal website"
          title="lukas hoppe"
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageLh.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
      </Container>
    </>
  )
}

export default ProductPage
