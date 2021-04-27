import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/300.css"
import "@fontsource/oswald/700.css"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  -webkit-tap-highlight-color: transparent;
  body{
    font-size: 1.6rem;
    background: ${props => props.theme.colors.bright};
    font-family: "Poppins";
    margin: 0;
    color: ${props => props.theme.colors.dark};

    h1, h2, h3, h4, h5, h6{
      margin: 0;
      font-weight: 500;
      color: ${props => props.theme.colors.dark};
    }

    h1 {
      font-size: 2.8rem;
      @media ${Breakpoint.lg} {
        font-size: 4rem;
      }
    }
    h2{
      font-size: 2.4rem;
      margin-bottom: 1rem;
      @media ${Breakpoint.lg} {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
    h3, h4, h5, h6{
      font-size: 1.9rem;
      margin-bottom: 0.5rem;
      @media ${Breakpoint.lg} {
        font-size: 2rem;
      }
    }
    pre{
      margin: 0;
      margin-bottom: 2rem;
      @media ${Breakpoint.lg} {
        margin-bottom: 2rem;
      }
    }
    small{
      font-size: 1.2rem;
      color: ${props => props.theme.colors.middlegrey};
      font-weight: 300;
    }
    p{
      line-height: 1.8;
      font-size: 1.6rem;
      color: ${props => props.theme.colors.middlegrey};
      font-weight: 300;
      margin: 0;
      margin-bottom: 2rem;
      @media ${Breakpoint.lg} {
        line-height: 1.8;
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }
      strong{
        font-weight: 400;
       color: ${props => props.theme.colors.dark};
      }
      ul{
        padding-left: 20px;
        li{
          margin-bottom: 1rem;
        }
      }
      &.quote{
        border-left: 3px solid ${props => props.theme.colors.dark};
        padding-left: 1.5rem;
        font-style: italic;
        font-size: 1.4rem;
        @media ${Breakpoint.lg} {font-size: 1.6rem}
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}

`
export default GlobalStyle
