//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"

//page specific components

import Tagline from "../components/00-shared/Tagline"

import ContentRow from "../components/00-shared/ContentRow"
import Image1 from "../images/photos/image-cover-moritz.jpg"
import Image2 from "../images/photos/image-cover-ischgl.jpg"
import Image3 from "../images/photos/image-cover-ingolstadt.jpg"
import Image4 from "../images/photos/image-cover-hockey.jpg"

const PhotosPage = () => {
  return (
    <>
      <Container>
        <Tagline
          text="when I make pictures 
I connect to the people I shoot."
        />
      </Container>
    </>
  )
}

export default PhotosPage
