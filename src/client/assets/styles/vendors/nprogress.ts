/**
 * import node_modules
 */
import { css } from "styled-components"
import { createMuiTheme } from "@material-ui/core"

/**
 * main
 */
const theme = createMuiTheme()
const loaderColor = theme.palette.secondary.main

/* stylelint-disable */
export default css`
  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;

    &::before {
      content: "";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      height: 2px;
      z-index: 1500;
    }
  }

  #nprogress .bar {
    background: ${loaderColor};

    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${loaderColor}, 0 0 5px ${loaderColor};
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${loaderColor};
    border-left-color: ${loaderColor};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
