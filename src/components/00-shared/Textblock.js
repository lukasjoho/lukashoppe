import React from "react"
import styled from "styled-components"
import Button from "./Button"
const StyledTextblock = styled.div``
const Textblock = () => {
  return (
    <StyledTextblock>
      <h1>
        hey, I am Lukas
        <br />i like to build.
      </h1>
      <p>
        Currently, I explore the world of product management. <br />I am
        studying technology and management. <br />I like to capture moments
        through photography. <br />
        Say hello at mail@example.com
      </p>
      <Button text="My Work" />
    </StyledTextblock>
  )
}

export default Textblock
