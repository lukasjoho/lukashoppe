import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/300.css"
import Breakpoint from "src/components/00-shared/_breakpoints.js"
const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;

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
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
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
    p{
      line-height: 1.8;
      font-size: 1.6rem;
      color: ${props => props.theme.colors.middlegrey};
      font-weight: 300;
      margin: 0;
      margin-bottom: 1.5rem;
      @media ${Breakpoint.lg} {
        line-height: 1.8;
      font-size: 1.8rem;
      margin-bottom: 2rem;
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
