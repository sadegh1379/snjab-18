import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "yekan-bold";
    src: url("/fonts/yekan.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "yekan";
    src: url("/fonts/yekan-bold.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "iran-sans";
    src: url("/fonts/iran-sans.woff") format("woff"),
      url("/fonts/iran-sans.ttf") format("ttf");
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: #104c82;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "yekan";
    background-color: ${(props) => props.theme.colors.background.primary};
    color: ${(props) => props.theme.colors.text.primary};
    direction: rtl;
  }

  input[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      -moz-appearance: textfield;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  /* fonts class  */
  .f_yekan {
    font-family: "yekan";
  }

  .f_yekan_bold {
    font-family: "yekan-bold";
  }

  .f_iran_sans {
    font-family: "iran-sans";
  }

  /* react toastify  css */
  .app_toast_container {
    .Toastify__toast-body {
      font-family: "yekan";
      z-index: 9999999999;
      font-size: 14px;
      font-weight: 500;
    }
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) =>
        theme.colors.background.infoLight} #D9E3EF;
    }
  }

  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #d9e3ef;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.infoLight};
    border-radius: 50px;
  }

  /* highcharts */
  .highcharts-menu-item {
    text-align: right !important;
    direction: rtl !important;
  }
  .highcharts-loading {
    @keyframes skeleton-loading {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        opacity: 0.3;
      }
    }
    background-color: rgba(200, 200, 200, 0.8) !important;
    animation: skeleton-loading 2s infinite linear !important;
  }

  /* css animations */
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes shake-rotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes shake-x {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

 
`;
