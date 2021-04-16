import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins/latin-ext.css"
const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
 
  body{
    font-size: 1.6rem;
    background: ${props => props.theme.colors.bright};
    font-family: "Poppins";
    margin: 0;
    h1, h2, h3, h4, h5, h6{
      margin: 0;
      font-weight: 500;
      color: ${props => props.theme.colors.dark};
    }
    p{
      line-height: 1.8;
      font-size: 1.8rem;
      color: ${props => props.theme.colors.middlegrey};
      font-weight: 300;
    }
  }
}

`
export default GlobalStyle
