import React from "react"
import styled from "styled-components"
import Col from "./Col"
import Row from "./Row"
import Textblock from "./Textblock"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import Button from "src/components/00-shared/Button"
const StyledContentRow = styled.div`
  display: flex;
  margin-bottom: ${props => `${props.theme.spacing.spacer.mobile}rem`};
  @media ${Breakpoint.lg} {
    margin-bottom: ${props => `${props.theme.spacing.spacer.desktop}rem`};
  }
`

const ContentRow = ({
  image,
  text,
  reverse,
  reverseMobile,
  center,
  button,
  href,
}) => {
  return (
    <StyledContentRow>
      <Row reverse={reverse} reverseMobile={reverseMobile}>
        <Col center={center}>
          <h2>
            hey, I am Lukas
            <br />i like to build.
          </h2>
          <p>{text}</p>
          <Button text={button} href={href} />
        </Col>
        <Col center={center}>
          <img src={image} alt="" width="100%" />
        </Col>
      </Row>
    </StyledContentRow>
  )
}

export default ContentRow
