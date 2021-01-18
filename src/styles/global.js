import { createGlobalStyle } from "styled-components";
import Background from "../images/Background.webp";

export default createGlobalStyle`
  body {
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    z-index: -2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-attachment: fixed;
  }

  div#bg-filter {
    position:fixed;
    top:0;
    z-index:-1;
    background: rgba(36, 57, 40, 0.42);
    width: 100%;
    height: 1000vh;
  }
`;
