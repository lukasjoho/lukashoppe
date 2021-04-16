//dependencies
import React from "react"
import styled from "styled-components"

import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import Footer from "../Footer"
const StyledMenu = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.dark};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
  flex-direction: column;
  Footer {
    position: absolute;
    bottom: 0;
  }
`
const Nav = styled.nav`
  ul {
    padding: 0;
    list-style-type: none;
    a {
      text-decoration: none;
    }
    li {
      text-align: center;
      color: ${props => props.theme.colors.bright};
      font-size: 6rem;
      font-weight: 700;
      line-height: 12rem;
    }
  }
`

const item = {
  before: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
  after: { y: -200, opacity: 0 },
}
const container = {
  hidden: { y: -50, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
}
const NavItem = ({ link, text, delay, handleToggle }) => {
  return (
    <Link to={link}>
      <motion.li
        onClick={handleToggle}
        variants={item}
        initial="before"
        animate="show"
        exit="after"
        transition={{ delay: delay }}
      >
        {text}
      </motion.li>
    </Link>
  )
}
const Menu = ({ isOpen, handleToggle }) => {
  return (
    <StyledMenu
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav>
        <motion.ul>
          <NavItem link="/" text="home" delay={0} handleToggle={handleToggle} />
          <NavItem
            link="/photos"
            text="photos"
            delay={0.05}
            handleToggle={handleToggle}
          />
          <NavItem
            link="/product"
            text="product"
            delay={0.1}
            handleToggle={handleToggle}
          />
          <NavItem
            link="/"
            text="home"
            delay={0.15}
            handleToggle={handleToggle}
          />
          <NavItem
            link="/"
            text="home"
            delay={0.2}
            handleToggle={handleToggle}
          />
        </motion.ul>
      </Nav>
      <Footer />
    </StyledMenu>
  )
}

export default Menu
