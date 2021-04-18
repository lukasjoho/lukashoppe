import React, { useEffect, useState } from "react"
import GlobalStyle from "../GlobalStyle"
import Theme from "../Theme"
import Footer from "../components/Footer"
import Header from "../components/Header"
import styled from "styled-components"
import Menu from "../components/00-shared/Menu"
import { motion, AnimatePresence } from "framer-motion"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
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
        <Header handleToggle={handleToggle} isOpen={isOpen} />
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
