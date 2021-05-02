//dependencies
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

//utils
import Breakpoint from "src/components/00-shared/_breakpoints.js"
//general components
import Container from "../../components/00-shared/Container"
import Col from "../../components/00-shared/Col"

//page specific components
import BlogHead from "../../components/05-blog/BlogHead"
import PremiumLink from "../../components/00-shared/PremiumLink"
import BlogRow from "../../components/05-blog/BlogRow"
import { BlogImage } from "../../components/05-blog/BlogImage"
import { BlogVideo } from "../../components/05-blog/BlogVideo"
import SEO from "src/components/00-shared/Seo.js"
//Change from here on downwards
//Use gatsby image component for images - Add inline prop if image inside column
const PrototypingPage = () => {
  const { image1, image2, image3 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "borrow/image-borrow-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image2: file(relativePath: { eq: "borrow/image-borrow-design.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image3: file(relativePath: { eq: "borrow/image-borrow-code.jpg" }) {
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
      <SEO
        title="prototyping"
        description="A website redesign in 100 seconds."
        url="https://lukashoppe.com/blog/prototyping"
      />
      <Container small>
        {/* change bloghead  */}
        <BlogHead
          title="prototyping"
          tags={["web development", "UX", "product management"]}
        />
        {/* change row inside */}
        <BlogRow>
          <Col small>
            <h2>A website redesign in 100 seconds.</h2>
          </Col>
          <Col large>
            <p>
              With my recent efforts in product management I increasingly came
              in contact with the technique of prototyping and testing. So, over
              the weekend, I wanted to make a little prototyping project and
              came across the online shop of Bonvelo. I thought that their
              product page was worth a try, to experiment and give it a
              redesign. The result is a high-fidelity clickable prototype.{" "}
              <br />
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col full>
            <BlogVideo url="https://www.youtube.com/embed/qvc0QrFRVNo" />
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>prototype and test</h2>
          </Col>
          <Col large>
            <p>
              The prototype is my opinion, and opinion can be bad. Data kills
              opinion. Hence, if this were a real project, it should be
              subjected to user testing and data gathering. Testing usability of
              the prototype reveals whether users actually have a better
              shopping experience. Do users experience it as a substantially
              better solution than the previous version? By running a user test,
              we can let users drive the prototype and see which direction they
              take. The prototype could then either pass or fail and should be
              itereted subsquently.
            </p>
            <p>
              I spent 4h on the redesign, 4h on the code and 6h on the video.
              Tools I used: Figma, NextJS, Framer Motion Make sure to checkout
              the bikes of Bonvelo. I own one myself and can truly recommend!
            </p>
          </Col>
        </BlogRow>
      </Container>
    </>
  )
}

export default PrototypingPage
