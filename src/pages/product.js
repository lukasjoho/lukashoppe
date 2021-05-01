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
    imageBorrow,
  } = useStaticQuery(graphql`
    query {
      imageBonvelo: file(relativePath: { eq: "product/image-bonvelo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
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
            quality: 90
          )
        }
      }
      imageNikolas: file(relativePath: { eq: "product/image-nikolas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageBiersafe: file(relativePath: { eq: "product/image-biersafe.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageExcyted: file(relativePath: { eq: "product/image-excyted.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageNewschool: file(relativePath: { eq: "product/image-school.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageLh: file(relativePath: { eq: "product/image-lh.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageBorrow: file(relativePath: { eq: "product/image-borrow.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
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
          link="/blog/prototyping"
          button="see more"
          image={getImage(imageBonvelo.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="e-commerce"
          title="biersafe"
          text="This is an ecommerce shopify design, that I crafted for a beer accessory manufacturer from Germany together with the technology studio excyted. The shop uses the shopify storefront api as the shop backend and GatsbyJS on the frontend. The branding was created together with the agency StupidAndSimple"
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageBiersafe.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="personal crypto website"
          title="about nik"
          text="This is a personal crypto website I created for my friend Nik. As Nik is a crypto enthusiast we went for a site that features his business endeavours, his favourite books, papers and his very own scientific research.
I then coded the site with the javascript framework NextJS."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageNikolas.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="school website"
          title="new school"
          text="I developed this school website together with the technology studio excyted. We used GatsbyJS on the frontend and Prismic as content management system on the backend. This gives the school the opportunity to change the websites content and toggle components whenever they like."
          href="https://new-school.netlify.app/"
          button="visit newschool"
          image={getImage(imageNewschool.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="startup landing page"
          title="sustragil"
          text="I designed and developed this landing page for a startup in the chemical supply industry. I designed the one-pager in Figma and developed it with GatsbyJS. The site features a custom tailored hero animation which I created in After Effects. "
          href="https://sustragil.com/"
          button="visit sustragil"
          image={getImage(imageSustragil.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="agency website"
          title="excyted"
          text="I designed this website for the web agency excyted.
I chose a dark theme with thin lines, dots and glow, a bold font poppins and an edgy look to create a digital technology mood through out the site.
I then also developed the site from scratch with GatsbyJS and Contentful."
          href="https://excyted.io/"
          button="visit excyted"
          image={getImage(imageExcyted.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="my very own personal website"
          title="lukas hoppe"
          text="My own website is a reminder to the legible and harmonious use of white-space to create an effective and easy-to-use website. I designed it with Figma and developed it with GatsbyJS. On top of that I used to Contentful to manage my content. I also used framer-motion to include smooth animations."
          image={getImage(imageLh.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="a techlabs project"
          title="borrow app"
          text="As a web development mentor I supported a group of learners in the TechLabs coding program in designing and developing their first app and landing page."
          image={getImage(imageBorrow.childImageSharp.gatsbyImageData)}
          link="/blog/borrow"
          button="see more"
          reverseMobile
          inside
        />
      </Container>
    </>
  )
}

export default ProductPage
