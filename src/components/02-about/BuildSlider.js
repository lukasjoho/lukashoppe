import React, { useState, useEffect } from "react"
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
import "src/components/00-shared/swiper.css"
import SliderTitle from "./SliderTitle"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import IconCaret from "src/images/icons/icon-caret.svg"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard])
const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(26, 26, 26, 0.9);
`

const StyledItem = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  cursor: pointer;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`
const StyledModalContent = styled(motion.div)`
  width: 100%;
  padding: 1.5rem;
  @media ${Breakpoint.lg} {
    width: 50%;
  }
  .video {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background: grey;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`
const StyledSwiper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: ${props => `${props.theme.spacing.spacer.mobile}rem`};
  @media ${Breakpoint.lg} {
    padding-bottom: ${props => `${props.theme.spacing.spacer.desktop}rem`};
  }
  .swiper {
    padding-bottom: 7rem;
    position: relative;
    @media ${Breakpoint.lg} {
      padding-bottom: 2rem;
    }
    .swiper-slide {
      &:last-child {
        margin-right: 0 !important;
      }
    }
    .button-container {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      @media ${Breakpoint.lg} {
        display: none;
      }
      .next,
      .prev {
        all: unset;
        cursor: pointer;
        position: relative;
        z-index: 999;
        font-size: 0;
        padding: 1rem 1.5rem;
        transition: 0.3s ease;
        &:hover {
          background: ${props => `${props.theme.colors.middlegrey}15`};
        }
        img {
          width: 1rem;
        }
        &:first-child {
          margin-right: 4rem;
          img {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
`
const BuildSlider = () => {
  const [show, setShow] = useState(false)
  const [url, setUrl] = useState("")
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [show])
  const handleShow = url => {
    setShow(!show)
    setUrl(url)
  }
  return (
    <AnimateSharedLayout>
      <StyledSwiper>
        <SliderTitle text="watch me build" />
        <Swiper
          className="swiper"
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          pagination={{ clickable: true }}
          // mousewheelControl={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          // mousewheel={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            //when window width is >= 768px
            960: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <StyledItem
              onClick={() =>
                handleShow(
                  "https://www.youtube.com/embed/lmsnaBz8kP4?autoplay=1"
                )
              }
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/lmsnaBz8kP4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </StyledItem>
          </SwiperSlide>
          <SwiperSlide>
            <StyledItem
              onClick={() =>
                handleShow(
                  "https://www.youtube.com/embed/DC_EtJI--3M?autoplay=1"
                )
              }
            >
              <motion.div layoutId="1">
                <iframe
                  layoutId="1"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DC_EtJI--3M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </motion.div>
            </StyledItem>
          </SwiperSlide>

          <SwiperSlide>
            <StyledItem
              onClick={() =>
                handleShow(
                  "https://player.vimeo.com/video/459927223?title=0&byline=0&portrait=0?autoplay=1"
                )
              }
            >
              <iframe
                src="https://player.vimeo.com/video/459927223?title=0&byline=0&portrait=0"
                width="100%"
                height="100%"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </StyledItem>
          </SwiperSlide>
          <div className="button-container">
            <button className="prev">
              <img src={IconCaret} alt="" />
            </button>
            <button className="next">
              <img src={IconCaret} alt="" />
            </button>
          </div>
        </Swiper>
        <AnimatePresence>
          {show && (
            <StyledModal onClick={handleShow}>
              <StyledModalContent
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <div className="video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  ></iframe>
                </div>
              </StyledModalContent>
            </StyledModal>
          )}
        </AnimatePresence>
      </StyledSwiper>
    </AnimateSharedLayout>
  )
}

export default BuildSlider
