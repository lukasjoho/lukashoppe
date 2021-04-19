import React, { useState } from "react"
import styled from "styled-components"
import IconLogo from "src/images/icons/icon-lh.svg"
import IconLogoBright from "src/images/icons/icon-lh-bright.svg"
import Breakpoint, { size } from "src/components/00-shared/_breakpoints.js"
import Lottie from "lottie-react-web"
import dataHamburger from "src/data/hamburger"
import dataHamburgerBright from "src/data/hamburgerBright"
import GetWindowDimensions from "src/components/00-shared/_getWindowDimensions.js"
const StyledHeader = styled.header`
  height: ${props => `${props.theme.spacing.layout.mobile}rem`};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  position: fixed;
  top: 0;
  /* background: ${props => props.theme.colors.bright};
   */
  background: transparent;
  transition: 0.3s;
  @media ${Breakpoint.lg} {
    height: ${props => `${props.theme.spacing.layout.desktop}rem`};
  }
  &.isOpen {
    background: transparent;
  }
`
const StyledLottie = styled.div`
  /* background: grey; */
  height: 5rem;
  width: 5rem;
  position: absolute;
  right: ${props => `calc(${props.theme.spacing.padding.mobile}rem - 6px)`};
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media ${Breakpoint.lg} {
    right: ${props =>
      `calc(${props.theme.spacing.padding.desktop}rem  - 10px)`};
    height: 6rem;
    width: 6rem;
  }
  .lottie {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.5s ease;
    &.visible {
      opacity: 1;
    }
  }
`
const Hamburger = styled.div`
  width: 2.2rem;
  height: 1.4rem;
  position: absolute;
  right: ${props => `${props.theme.spacing.padding.mobile}rem`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${Breakpoint.lg} {
    right: ${props => `${props.theme.spacing.padding.desktop}rem`};
  }
  cursor: pointer;
  div {
    height: 0.2rem;
    width: 100%;
    background: ${props => props.theme.colors.dark};
    position: relative;
  }
  &.isOpen {
    div {
      background: ${props => props.theme.colors.bright};
    }
  }
`
const StyledLogo = styled.div`
  height: 3rem;
  @media ${Breakpoint.lg} {
    height: 4rem;
  }
`

const Header = ({ handleToggle, isOpen, isPaused }) => {
  const [isToggled, setIsToggled] = useState(false)
  const lg = typeof document !== `undefined` ? size.lg : size.lg
  const { windowWidth } = GetWindowDimensions()
  const isDesktop = windowWidth >= lg
  const lottieWidth = isDesktop ? 60 : 50
  return (
    <StyledHeader className={isOpen && "isOpen"}>
      <StyledLogo>
        {isOpen ? (
          <img src={IconLogoBright} alt="" height="100%" />
        ) : (
          <img src={IconLogo} alt="" height="100%" />
        )}
      </StyledLogo>
      {/* <Hamburger onClick={handleToggle} className={isOpen && "isOpen"}>
        <div />

        <div />
      </Hamburger> */}

      <StyledLottie
        onClick={() => {
          handleToggle()
          setIsToggled(!isToggled)

          // if (isPaused) {
          //   setIsPaused(false)
          // } else {
          //   setTimeout(() => {
          //     setIsPaused(true)
          //   }, 600)
          // }
        }}
        // onClick={handleToggle}
      >
        <div className={`lottie ${isOpen && "visible"}`}>
          <Lottie
            width={lottieWidth}
            height={lottieWidth}
            isPaused={isPaused}
            direction={isOpen ? 1 : -1}
            speed={2}
            options={{
              animationData: dataHamburgerBright,
              loop: false,
            }}
          />
        </div>

        <div className={`lottie ${!isOpen && "visible"}`}>
          <Lottie
            width={lottieWidth}
            height={lottieWidth}
            isPaused={isPaused}
            direction={isOpen ? 1 : -1}
            speed={2}
            options={{
              animationData: dataHamburger,
              loop: false,
            }}
          />
        </div>
      </StyledLottie>
    </StyledHeader>
  )
}

export default Header
