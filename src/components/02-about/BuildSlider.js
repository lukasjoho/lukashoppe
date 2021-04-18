import React, { useState } from "react"
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
  background: ${props => props.theme.colors.dark};
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
const StyledSwiper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 20rem;
  background: red;
  .swiper {
    background: lightblue;

    .swiper-slide {
      &:last-child {
        margin-right: 0 !important;
      }
    }
  }
`
const BuildSlider = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <StyledSwiper>
      <SliderTitle text="watch me build" />
      <Swiper
        className="swiper"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        mousewheelControl={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        mousewheel={true}
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
          <StyledItem onClick={handleShow}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DC_EtJI--3M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </StyledItem>
        </SwiperSlide>
        <SwiperSlide>
          <StyledItem>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DC_EtJI--3M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </StyledItem>
        </SwiperSlide>
        <SwiperSlide>
          <StyledItem>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DC_EtJI--3M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </StyledItem>
        </SwiperSlide>
      </Swiper>
      {show && (
        <StyledModal onClick={handleShow}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DC_EtJI--3M?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </StyledModal>
      )}
    </StyledSwiper>
  )
}

export default BuildSlider
