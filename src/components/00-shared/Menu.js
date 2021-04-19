//dependencies
import React, { useState } from "react"
import styled from "styled-components"

import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import Footer from "src/layouts/Footer"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
const StyledMenu = styled(motion.div)`
  width: 100vw;
  height: 100%;
  background: ${props => props.theme.colors.dark};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
  flex-direction: column;
  font-family: "Oswald";
  font-weight: 700;
  letter-spacing: 0.05rem;

  Footer {
    position: absolute;
    bottom: 0;
  }
`
const Nav = styled.nav`
  .mainlist {
    padding: 0;
    list-style-type: none;
    a {
      text-decoration: none;
    }
    li {
      text-align: center;
      color: ${props => props.theme.colors.middlegrey};
      font-size: 4rem;
      font-weight: 700;
      line-height: 8rem;
      &:hover {
        color: ${props => props.theme.colors.bright};
      }
      @media ${Breakpoint.lg} {
        font-size: 6rem;
        font-weight: 700;
        line-height: 12rem;
      }
      cursor: pointer;
      .sublist {
        padding: 0;
        list-style-type: none;
        li {
          font-size: 2rem;
          line-height: 5rem;
          cursor: pointer;
          @media ${Breakpoint.lg} {
            font-size: 2.5rem;
            line-height: 6rem;
          }
        }
      }
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
const NavItem = ({
  link,
  text,
  delay,
  handleToggle,
  dropdown,
  itemkey,
  handleExpanded,
  expanded,
  index,
}) => {
  return (
    <>
      {dropdown ? (
        <>
          <motion.li
            onClick={e => handleExpanded(e)}
            variants={item}
            initial="before"
            animate="show"
            exit="after"
            transition={{ delay: delay }}
            id={itemkey}
          >
            {text}
            <AnimatePresence>
              {expanded && index == itemkey && (
                <motion.ul
                  className="sublist"
                  style={{ overflow: "hidden" }}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  {dropdown.map(item => (
                    <Link to={`${item[1]}`}>
                      <li onClick={handleToggle}>{item[0]}</li>
                    </Link>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
        </>
      ) : (
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
      )}
    </>
  )
}
const Menu = ({ isOpen, handleToggle }) => {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = e => {
    if (expanded && index == e.target.id) {
      setExpanded(false)
    } else if (expanded) {
      setExpanded(true)
    } else {
      setExpanded(!expanded)
    }

    console.log("Index: ", index)
    console.log("Target: ", e.target.id)
    setIndex(e.target.id)
  }
  return (
    <StyledMenu
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav>
        <motion.ul className="mainlist">
          <NavItem link="/" text="home" delay={0} handleToggle={handleToggle} />
          <NavItem
            link="/about"
            text="about"
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
            link="/media"
            text="media"
            delay={0.15}
            handleToggle={handleToggle}
            handleExpanded={handleExpanded}
            expanded={expanded}
            dropdown={[
              ["photos", "/photos"],
              ["films", "/films"],
            ]}
            itemkey="media"
            index={index}
          />
          <NavItem
            link="/"
            text="blog"
            delay={0.2}
            handleToggle={handleToggle}
            handleExpanded={handleExpanded}
            expanded={expanded}
            dropdown={[["techlabs", "/blog/techlabs"]]}
            itemkey="blog"
            index={index}
          />
        </motion.ul>
      </Nav>
      <Footer isOpen={isOpen} />
    </StyledMenu>
  )
}

export default Menu
