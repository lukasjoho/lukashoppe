//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"

//page specific components

import Tagline from "../components/00-shared/Tagline"

import ContentRow from "../components/00-shared/ContentRow"
import Image1 from "../images/product/image-biersafe.jpg"
import Image2 from "../images/product/image-nikolas.jpg"

const ProductPage = () => {
  return (
    <>
      <Container>
        <Tagline
          text="passionate about developing digital products.
i believe that the art of building is the art of listening to your customer"
        />
        <ContentRow
          text="This is a personal crypto website I created for my friend Nik. As Nik is a crypto enthusiast we went for a site that features his business endeavours, his favourite books, papers and his very own scientific research.
I then coded the site with the javascript framework NextJS."
          href="https://biersafe.netlify.app/"
          button="visit biersafe"
          image={Image1}
          reverseMobile
        />
        <ContentRow
          text="The era of digital technology is changing the types of products and services, the process of value creation and tools that enable us to to use and apply our own ideas and imagination.
I want to use the full range of digital tools I have at my hands and blend them with my creativity to create great content for other peoples ideas, for start ups, businesses and my personal projects."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={Image2}
          reverseMobile
        />
      </Container>
    </>
  )
}

export default ProductPage
