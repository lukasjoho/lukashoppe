import React from "react"
import styled from "styled-components"
import Col from "./Col"
import Row from "./Row"
import Textblock from "./Textblock"

const StyledContentRow = styled.div`
  background: green;
  display: flex;
  margin-bottom: 20rem;
`

const ContentRow = ({ image, text, reverse, center }) => {
  return (
    <StyledContentRow>
      <Row reverse={reverse}>
        <Col center={center}>
          <Textblock text={text} />
        </Col>
        <Col center={center}>
          <img src={image} alt="" width="100%" />
        </Col>
      </Row>
    </StyledContentRow>
  )
}

export default ContentRow
