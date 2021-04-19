//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"
import Row from "../components/00-shared/Row"
//page specific components
import FullPage from "../components/00-shared/FullPage"
import Image from "../components/01-home/Image"

import PremiumLink from "../components/00-shared/PremiumLink"
import styled from "styled-components"
import Button from "src/components/00-shared/Button"

import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledTextblock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 3rem;
  @media ${Breakpoint.lg} {
    padding-bottom: 0rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    @media ${Breakpoint.lg} {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`
const IndexPage = ({ handleToggle }) => (
  <>
    <FullPage auto>
      <Container small auto>
        <Image />
        <StyledTextblock>
          <h1>
            hey, I am Lukas
            <br />i like to build.
          </h1>
          <p>
            Currently, I explore the world of product management. <br />I am
            studying technology and management. <br />I like to capture moments
            through photography. <br />
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

export default IndexPage
