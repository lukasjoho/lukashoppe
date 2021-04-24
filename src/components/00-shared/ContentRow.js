import React from "react"
import styled from "styled-components"
import Col from "./Col"
import Row from "./Row"
import Textblock from "./Textblock"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import Button from "src/components/00-shared/Button"
import { GatsbyImage } from "gatsby-plugin-image"
const StyledContentRow = styled.div`
  display: flex;
  margin-bottom: ${props => `${props.theme.spacing.spacer.mobile}rem`};
  .inside {
    margin-bottom: 2rem;
  }
  .outside {
    display: none;
  }
  @media ${Breakpoint.lg} {
    margin-bottom: ${props => `${props.theme.spacing.spacer.desktop}rem`};
    .inside {
      display: none;
    }
    .outside {
      display: block;
    }
  }
  span {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.middlegrey};
    font-weight: 300;
    position: relative;
    top: 0.3rem;
  }
`

const ContentRow = ({
  image,
  title,
  text,
  reverse,
  reverseMobile,
  center,
  button,
  href,
  inside,
  subtitle,
}) => {
  return (
    <StyledContentRow>
      <Row reverse={reverse} reverseMobile={reverseMobile}>
        <Col center={center}>
          {subtitle && <span>{subtitle}</span>}
          {title && <h2>{title}</h2>}
          {inside && <GatsbyImage image={image} className="inside" />}
          <p>{text}</p>
          <Button text={button} href={href} />
        </Col>
        <Col center={center}>
          <GatsbyImage image={image} className={inside && "outside"} />
        </Col>
      </Row>
    </StyledContentRow>
  )
}

export default ContentRow
