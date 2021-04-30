import React, { useEffect, useLayoutEffect, useContext, useState } from "react"
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
import ImagePlaceholder from "../images/product/image-bonvelo.jpg"
import Breakpoint, { size } from "src/components/00-shared/_breakpoints.js"
import Button from "../components/00-shared/Button"
import IconKeys from "src/images/icons/icon-keys.svg"
import IconScroll from "src/images/icons/icon-scroll.svg"
import { Context } from "src/utils/Context.js"
import GetWindowDimensions from "src/components/00-shared/_getWindowDimensions.js"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard])

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledOverlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(26, 26, 26, 0.9);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    background: ${props => props.theme.colors.bright};
    display: inline-flex;
    flex-direction: column;
    padding: 4rem;
    h2 {
      text-align: center;
    }
    ul {
      list-style-type: none;
      display: flex;
      margin: 6rem 0;
      justify-content: center;
      padding: 0;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;
        img {
          height: 3.5rem;
        }
        p {
          margin: 0;
          margin-top: 2rem;
        }
      }
    }
  }
`
const StyledImage = styled(motion.div)`
  width: 100vw;
  font-size: 0;
  background: grey;

  @media ${Breakpoint.lg} {
    width: 100%;

    height: ${props =>
      `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
  }
  img {
    width: 100%;
    @media ${Breakpoint.lg} {
      height: ${props =>
        `calc(100vh - 2*${props.theme.spacing.layout.desktop}rem)`};
      width: auto;
    }
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
  const lg = typeof document !== `undefined` ? size.lg : size.lg
  const { windowWidth } = GetWindowDimensions()
  const isDesktop = windowWidth >= lg
  const [context, setContext] = useContext(Context)
  useEffect(() => {
    setTimeout(() => setContext(true), 1500)
  }, [])
  console.log("context", context)
  const handleOverlay = () => {
    setContext(false)
  }

  return (
    <FullPage>
      <AnimatePresence>
        {isDesktop && context && (
          <StyledOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0, duration: 1 }}
          >
            <div className="content">
              <h2>
                slide through photos <span>your way</span>
              </h2>
              <ul>
                <li>
                  <img src={IconKeys}></img>
                  <p>use arrow keys</p>
                </li>
                <li>
                  <img src={IconScroll}></img>
                  <p>scroll vertically</p>
                </li>
                <li>
                  <img src={IconScroll}></img>
                  <p>scroll horizontally</p>
                </li>
              </ul>
              <Button overlay text="Got it. Let's go." event={handleOverlay} />
            </div>
          </StyledOverlay>
        )}
      </AnimatePresence>

      <Container>
        <Swiper
          spaceBetween={20}
          direction="horizontal"
          slidesPerView="auto"
          observer={true}
          observeParents={true}
          loop={false}
          centeredSlides={false}
          pagination={{ clickable: true }}
          mousewheelControl={true}
          // onSlideChange={swiper => swiper.slideTo(0)}
          onSwiper={swiper => swiper.setProgress(-0)}
          mousewheel={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          preloadImages={true}
          preloadImages={true}
          updateOnImagesReady={true}
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
