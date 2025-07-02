import { createGlobalStyle } from "styled-components";
import {Limelight} from "next/font/google";
import {Montserrat} from "next/font/google";

const limelight = Limelight({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
});




export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-wrap: break-word;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    --yellow: #e6b130;
    --orange: #e16a3d;
    --green: #36735f;
    --rosa: #F4E2DE;
    --pink: #ffa3a6;
    --black: #000000;
    --white: #ffffff;
    --light-grey:#f5f5f5;

    --main-headline:  700 1.7rem ${limelight.style.fontFamily}, system-ui;
    --sub-headline:  400 1rem ${montserrat.style.fontFamily}, system-ui;
    --text: 500 0.9rem ${montserrat.style.fontFamily}, system
  }
    
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${montserrat.style.fontFamily}, system-ui;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
`;
