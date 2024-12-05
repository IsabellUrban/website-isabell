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
    --yellow: #e5af33;
    --orange: #F27457;
    --green:#36735f;
    --rosa: #F4E2DE;
    --black: #000000;
    --white: #ffffff;

    --main-headline:  700 1.7rem ${limelight.style.fontFamily}, system-ui;
    --sub-headline:  400 1.1rem ${montserrat.style.fontFamily}, system-ui;
    --text: 500 1rem ${montserrat.style.fontFamily}, system
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
