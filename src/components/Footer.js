import React from "react"
import styled from "styled-components"
import Icon1 from "../images/icons/icon-mail.svg"
import Icon2 from "../images/icons/icon-linkedin.svg"
import Icon3 from "../images/icons/icon-dribbble.svg"
import Icon4 from "../images/icons/icon-youtube.svg"
import Icon5 from "../images/icons/icon-github.svg"

const StyledFooter = styled.footer`
  height: ${props => `${props.theme.spacing.layout.desktop}rem`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;

  p {
    line-height: 1;
    font-size: 1.4rem;
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
    img {
      width: 2rem;
    }
  }
  span {
    width: 1.5rem;
    height: 0.1rem;
    background: ${props => props.theme.colors.middlegrey};
    margin: 0 1rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <Ul>
      <li>
        <img src={Icon1} />
      </li>
      <span />
      <li>
        <img src={Icon2} />
      </li>
      <span />

      <li>
        <img src={Icon3} />
      </li>
      <span />

      <li>
        <img src={Icon4} />
      </li>
      <span />

      <li>
        <img src={Icon5} />
      </li>
    </Ul>
    <p>My channels</p>
  </StyledFooter>
)

export default Footer
