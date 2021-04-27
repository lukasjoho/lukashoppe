import React, { useEffect } from "react"
import FullPage from "../components/00-shared/FullPage"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "../components/00-shared/swiper.css"
import { motion, AnimatePresence } from "framer-motion"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard])

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledImage = styled(motion.div)`
  background: violet;
  width: 100%;
  height: ${props =>
    `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
  img {
    height: ${props =>
      `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
    width: auto;
  }
`
export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      category
      cover {
        gatsbyImageData(
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      images {
        gatsbyImageData(
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
const variants = {
  hidden: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}
const Gallery = props => {
  return (
    <FullPage>
      <Container>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          navigation
          centeredSlides={true}
          pagination={{ clickable: true }}
          mousewheelControl={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          mousewheel={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
        >
          <AnimatePresence>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 1 }}
              >
                <StyledImage>
                  {/* <img src={props.data.contentfulGallery.cover.file.url} alt="" /> */}

                  <GatsbyImage
                    image={getImage(
                      props.data.contentfulGallery.cover.gatsbyImageData
                    )}
                  />
                </StyledImage>
              </motion.div>
            </SwiperSlide>

            {props.data.contentfulGallery.images &&
              props.data.contentfulGallery.images.map((image, index) => {
                console.log(index)
                return (
                  <SwiperSlide>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{ duration: 1, delay: 0 }}
                    >
                      <StyledImage>
                        <GatsbyImage image={getImage(image.gatsbyImageData)} />
                      </StyledImage>
                    </motion.div>
                  </SwiperSlide>
                )
              })}
          </AnimatePresence>
        </Swiper>
        {/* <div className="swiper-container">
          <div className="swiper-wrapper">
            {slides.map(slide => (
              <div
                className="swiper-slide"
                style={{ background: `hsl(${slide * 10}, 83%, 47%)` }}
                key={slide}
              >{`slide ${slide}`}</div>
            ))}
          </div>
        </div> */}
      </Container>
    </FullPage>
  )
}

export default Gallery
