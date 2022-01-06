import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const GlobalStyles = createGlobalStyle`
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
      width: 0.5rem;
    }

  *::-webkit-scrollbar-track {
    background: var(--light-color);
    width: 0.5rem;

  }
  *::-webkit-scrollbar-thumb {
    background: var(--main-color);
  }

  * {
    scroll-behavior: smooth;
  }

  @supports (scrollbar-color: red blue){
    scrollbar-color:  #fff #333;
    scrollbar-width: thin;
  }

  html, body {
    height: 100%;
  }

  html {
    /* scroll-behavior: smooth; */
    --font: "Poppins";
    --main-color: hsl(0, 0%, 14%);
    --light-color: hsl(0, 0%, 90%);
    --lighter-color: hsl(0, 0%, 95%);
    --outline-color: hsl(0, 0%, 80%);
    --accent-color: hsl(12, 40%, 50%);
  }

  body {
    background-color: var(--main-color);
    font-family: var(--font);
  }

  #root {
    height: 100%;
  }

  img, a {
    display: inline-block;
  }

  a {
    text-decoration: none;
  }


  a:focus, button:focus, input:focus, textarea:focus {
    outline: none;
  }

  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline-style: dashed;
    outline-offset: 0.2rem;
    outline-width: 1px;
    outline-color: var(--outline-color);
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
