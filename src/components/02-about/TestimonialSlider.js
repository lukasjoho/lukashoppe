import React, { useState } from "react"
import styled from "styled-components"
import IconCaret from "src/images/icons/icon-caret.svg"
import { data } from "./dataTestimonials"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
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
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard])
const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 720px;
  .author {
    font-size: 1.4rem;
    @media ${Breakpoint.lg} {
      font-size: 1.6rem;
    }
  }
`
const StyledSwiper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: ${props => `${props.theme.spacing.spacer.mobile}rem`};
  @media ${Breakpoint.lg} {
    padding-bottom: ${props => `${props.theme.spacing.spacer.desktop}rem`};
  }
  .testimonialslider {
    padding-bottom: 4rem;
    position: relative;
    @media ${Breakpoint.lg} {
      padding-bottom: 8rem;
    }

    .button-container {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
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
const TestimonialSlider = () => {
  return (
    <StyledSwiper>
      <SliderTitle text="what others are saying" />
      <Swiper
        className="testimonialslider"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        // mousewheelControl={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        // mousewheel={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
      >
        {data.map(testimonial => {
          // var json = JSON.parse(testimonial.text)
          // let text = json.replace(/\n/g, "<br />")
          // const output = JSON.stringify(text)
          return (
            <SwiperSlide>
              <StyledTestimonial>
                <p>{testimonial.text.replace("<br/>", <br />)}</p>
                <p className="author">{testimonial.author}</p>
              </StyledTestimonial>
            </SwiperSlide>
          )
        })}

        <div className="swiper-pagination"></div>
        <div className="button-container">
          <button className="prev">
            <img src={IconCaret} alt="" />
          </button>
          <button className="next">
            <img src={IconCaret} alt="" />
          </button>
        </div>
      </Swiper>
    </StyledSwiper>
  )
}

export default TestimonialSlider
