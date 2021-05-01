import React, { useState, useContext } from "react"
import styled from "styled-components"
import Icon1 from "../images/icons/icon-mail.svg"
import Icon1Dark from "../images/icons/icon-mail-dark.svg"
import Icon1Bright from "../images/icons/icon-mail-bright.svg"
import Icon2 from "../images/icons/icon-linkedin.svg"
import Icon2Dark from "../images/icons/icon-linkedin-dark.svg"
import Icon2Bright from "../images/icons/icon-linkedin-bright.svg"
import Icon3 from "../images/icons/icon-dribbble.svg"
import Icon3Dark from "../images/icons/icon-dribbble-dark.svg"
import Icon3Bright from "../images/icons/icon-dribbble-bright.svg"
import Icon4 from "../images/icons/icon-youtube.svg"
import Icon4Bright from "../images/icons/icon-youtube-bright.svg"
import Icon4Dark from "../images/icons/icon-youtube-dark.svg"
import Icon5 from "../images/icons/icon-github.svg"
import Icon5Dark from "../images/icons/icon-github-dark.svg"
import Icon5Bright from "../images/icons/icon-github-bright.svg"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
import IconBlocks from "src/images/icons/icon-blocks.svg"
import { Context } from "src/utils/Context.js"
import { Link } from "gatsby"
const StyledFooter = styled.footer`
  height: ${props => `${props.theme.spacing.layout.mobile}rem`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  @media ${Breakpoint.lg} {
    height: ${props => `${props.theme.spacing.layout.desktop}rem`};
  }
  p {
    line-height: 1;
    font-size: 1.4rem;
  }
`

const StyledBlocks = styled.div`
  height: 3rem;
  font-size: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    transition: 0.3s ease;
    &:hover {
      filter: brightness(200%);
    }
    &:last-child {
      position: absolute;
      left: 0;
      top: calc(3rem - 1px);
    }
  }
  &:hover {
    img {
      transform: translateY(-100%);
    }
  }
`
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  align-items: center;
  font-size: 0;
  justify-content: center;
  li {
    position: relative;

    img {
      position: absolute;
      left: 0;
      opacity: 0;
      transition: 0.3s ease;
      &:first-child {
        opacity: 1;
        position: relative;
      }
      width: 2rem;
    }
    &:hover {
      img {
        opacity: 1;
      }
    }
  }
  span {
    width: 1.5rem;
    height: 0.1rem;
    background: ${props => props.theme.colors.middlegrey};
    margin: 0 1rem;
  }
`
const LinkItem = ({ href, icon, icondark, iconbright, isOpen }) => {
  return (
    <a href={href} target="_blank">
      <li>
        <img src={icon} />
        {isOpen ? <img src={iconbright} /> : <img src={icondark} />}
      </li>
    </a>
  )
}
const Footer = ({ isOpen, blocks }) => {
  const [context, setContext] = useContext(Context)
  console.log("Context visited: ", context.visited)
  return (
    <StyledFooter>
      {!blocks && (
        <Ul>
          <LinkItem
            href="mailto:mail@lukashoppe.com"
            isOpen={isOpen}
            icon={Icon1}
            iconbright={Icon1Bright}
            icondark={Icon1Dark}
          />

          <span />
          <LinkItem
            href="https://www.linkedin.com/in/lukashoppe/"
            isOpen={isOpen}
            icon={Icon2}
            iconbright={Icon2Bright}
            icondark={Icon2Dark}
          />

          <span />
          <LinkItem
            href="https://dribbble.com/lukasjoho"
            isOpen={isOpen}
            icon={Icon3}
            iconbright={Icon3Bright}
            icondark={Icon3Dark}
          />

          <span />
          <LinkItem
            href="https://github.com/lukasjoho"
            isOpen={isOpen}
            icon={Icon5}
            iconbright={Icon5Bright}
            icondark={Icon5Dark}
          />

          <span />
          <LinkItem
            href="https://www.youtube.com/channel/UCSePudpZ9upO0exjh9uuh9w"
            isOpen={isOpen}
            icon={Icon4}
            iconbright={Icon4Bright}
            icondark={Icon4Dark}
          />
        </Ul>
      )}
      {blocks && context.visited && (
        <StyledBlocks onClick={() => window.history.back()}>
          <img src={IconBlocks} alt="" />
          <img src={IconBlocks} alt="" />
        </StyledBlocks>
      )}
      {blocks && !context.visited && (
        <Link to="/photos">
          <StyledBlocks>
            <img src={IconBlocks} alt="" />
            <img src={IconBlocks} alt="" />
          </StyledBlocks>
        </Link>
      )}
    </StyledFooter>
  )
}

export default Footer
