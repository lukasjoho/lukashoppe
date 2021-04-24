//dependencies
import * as React from "react"
import { getImage } from "gatsby-plugin-image"
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

const BorrowPage = () => {
  const { imageTeam, imageInstagram } = useStaticQuery(graphql`
    query {
      imageTeam: file(relativePath: { eq: "image-techlabs-team.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageInstagram: file(
        relativePath: { eq: "image-techlabs-instagram.jpg" }
      ) {
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
    <Container small>
      {/* Change BlogHead */}
      <BlogHead
        title="TechLabs"
        tags={["digital learning", "web development", "UX", "mentoring"]}
      />

      <BlogRow>
        {/* change col centent */}
        <Col small>
          <h2>learnings</h2>
        </Col>
        <Col large>
          <p>
            For me, the Journey is not just about learning a coding language or
            mastering a digital tool. Much more, the nature of the TechLabs
            program allows you to have conversations about whats possible with
            software and to be aware of its capabilities.
          </p>
          <BlogImage
            inline
            image={getImage(imageTeam.childImageSharp.gatsbyImageData)}
          />
          <h3>learning A</h3>
          <p>
            For me, the Journey is not just about learning a coding language or
            mastering a digital tool. Much more, the nature of the TechLabs
            program allows you to have conversations about whats possible with
            software and to be aware of its capabilities.
          </p>
        </Col>
      </BlogRow>

      <BlogRow>
        <Col small></Col>
        <Col large>
          <h3>learning A</h3>
          <p>
            For me, the Journey is not just about learning a coding language or
            mastering a digital tool. Much more, the nature of the TechLabs
            program allows you to have conversations about whats possible with
            software and to be aware of its{" "}
            <PremiumLink href="www.techlabs.org">capabilities.</PremiumLink>
          </p>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col>
          <BlogImage
            image={getImage(imageTeam.childImageSharp.gatsbyImageData)}
          />
        </Col>
        <Col>
          <BlogImage
            image={getImage(imageInstagram.childImageSharp.gatsbyImageData)}
          />
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small></Col>
        <Col large>
          <h3>learning A</h3>
          <p>
            For me, the Journey is not just about learning a coding language or
            mastering a digital tool. Much more, the nature of the TechLabs
            program allows you to have conversations about whats possible with
            software and to be aware of its capabilities.
          </p>
        </Col>
      </BlogRow>
    </Container>
  )
}

export default BorrowPage
