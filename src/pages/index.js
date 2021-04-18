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
const StyledTextblock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const IndexPage = ({ handleToggle }) => (
  <>
    <FullPage auto>
      <Container small auto>
        <Image />
        <StyledTextblock>
          <h2>
            hey, I am Lukas
            <br />i like to build.
          </h2>
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
