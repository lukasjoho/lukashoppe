import React, { useEffect, useState } from "react"
import GlobalStyle from "../GlobalStyle"
import Theme from "../Theme"
import Footer from "src/components/Footer"
import Header from "src/components/Header"
import styled from "styled-components"
import Menu from "src/components/00-shared/Menu"
import { motion, AnimatePresence } from "framer-motion"
import Breakpoint from "src/components/00-shared/_breakpoints.js"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${props => `${props.theme.spacing.layout.mobile}rem`};
  @media ${Breakpoint.lg} {
    padding-top: ${props => `${props.theme.spacing.layout.desktop}rem`};
  }
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
    if (isPaused) {
      setIsPaused(false)
    } else {
      setTimeout(() => {
        setIsPaused(true)
      }, 600)
    }
  }
  useEffect(() => {
    // Update the document title using the browser API
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [isOpen])
  return (
    <Theme>
      <GlobalStyle />
      <StyledLayout>
        <Header
          handleToggle={handleToggle}
          isOpen={isOpen}
          isPaused={isPaused}
        />
        {/* {children} */}
        {React.cloneElement(children, {
          handleToggle: handleToggle,
        })}
        <Footer isOpen={isOpen} />
      </StyledLayout>
      <AnimatePresence exitBeforeEnter>
        {isOpen && <Menu isOpen={isOpen} handleToggle={handleToggle} />}
      </AnimatePresence>
    </Theme>
  )
}
export default Layout
