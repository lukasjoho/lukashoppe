import React from "react"
import styled from "styled-components"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledIcon = styled.div``

const Icon = ({ icon }) => {
  return (
    <StyledIcon>
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2607 4.95312C20.4131 4.83203 20.6396 4.94531 20.6396 5.13672V13.125C20.6396 14.1602 19.7998 15 18.7646 15H2.51465C1.47949 15 0.639648 14.1602 0.639648 13.125V5.14062C0.639648 4.94531 0.862305 4.83594 1.01855 4.95703C1.89355 5.63672 3.05371 6.5 7.03809 9.39453C7.8623 9.99609 9.25293 11.2617 10.6396 11.2539C12.0342 11.2656 13.4521 9.97266 14.2451 9.39453C18.2295 6.5 19.3857 5.63281 20.2607 4.95312ZM10.6396 10C11.5459 10.0156 12.8506 8.85938 13.5068 8.38281C18.6904 4.62109 19.085 4.29297 20.2803 3.35547C20.5068 3.17969 20.6396 2.90625 20.6396 2.61719V1.875C20.6396 0.839844 19.7998 0 18.7646 0H2.51465C1.47949 0 0.639648 0.839844 0.639648 1.875V2.61719C0.639648 2.90625 0.772461 3.17578 0.999023 3.35547C2.19434 4.28906 2.58887 4.62109 7.77246 8.38281C8.42871 8.85938 9.7334 10.0156 10.6396 10Z"
          fill="#f1f1f1"
        />
      </svg>
    </StyledIcon>
  )
}

export default Icon