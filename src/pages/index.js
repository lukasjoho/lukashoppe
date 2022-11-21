//dependencies
import * as React from "react"
import { useContext, useState } from "react"
//general components

import Container from "../components/00-shared/Container"
import Row from "../components/00-shared/Row"
//page specific components
import FullPage from "../components/00-shared/FullPage"
import Image from "../components/01-home/Image"
import SEO from "src/components/00-shared/Seo.js"
import PremiumLink from "../components/00-shared/PremiumLink"
import styled from "styled-components"
import Button from "src/components/00-shared/Button"
import { graphql, useStaticQuery } from "gatsby"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledTextblock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 3rem;
  width: 100%;
  @media ${Breakpoint.lg} {
    padding-bottom: 0rem;
    width: auto;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    @media ${Breakpoint.lg} {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`
const IndexPage = ({ handleToggle }) => {
  const { imageSeo } = useStaticQuery(graphql`
    query {
      imageSeo: file(relativePath: { eq: "image-seo.jpg" }) {
        childImageSharp {
          fixed(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title="I like to build"
        description="Hey, it's me Lukas. Welcome to my site. Explore my work."
        image={imageSeo.childImageSharp.fixed.src}
        url="https://lukashoppe.com"
      />
      <FullPage auto>
        <Container auto>
          <Image />
          <StyledTextblock>
            <h1>
              hey, I am lukas.
              <br />I like to build.
            </h1>
            <p>
              Currently, I explore the world of product management. <br />
              Before that, I worked as a web developer and ux designer.
              <br />I like to capture moments through photography. <br />
              Say hello at{" "}
              <PremiumLink href="mailto:mail@lukashoppe.com">
                mail@lukashoppe.com
              </PremiumLink>
            </p>

            <Button text="My Work" handleToggle={handleToggle} />
          </StyledTextblock>
        </Container>
      </FullPage>
    </>
  )
}

export default IndexPage
