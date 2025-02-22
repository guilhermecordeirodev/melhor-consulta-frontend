// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-Book.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-BookItalic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arboria';
    src: url('/src/assets/fonts/Arboria-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arboria', sans-serif;
    background-color: #fff; /* ou alguma cor de background */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
