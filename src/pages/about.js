//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"
import Row from "../components/00-shared/Row"
//page specific components

import Textblock from "../components/00-shared/Textblock"
import Tagline from "../components/00-shared/Tagline"
import Col from "../components/00-shared/Col"

import ContentRow from "../components/00-shared/ContentRow"
import Image1 from "../images/image-lukas-erzaehlt.jpg"
import BuildSlider from "../components/02-about/BuildSlider"
import TestimonialSlider from "../components/02-about/TestimonialSlider"

const AboutPage = () => {
  return (
    <>
      <Container>
        <Tagline text="while I like the process of nailing the work I am more excited about the environment I am working in and the people and ideas I meet along the way. " />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          image={Image1}
          center
        />
        <BuildSlider />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          image={Image1}
          reverse
          center
        />
        <TestimonialSlider />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          image={Image1}
          center
        />
      </Container>
    </>
  )
}

export default AboutPage
