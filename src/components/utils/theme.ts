import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;

  color: white;
  background-color: #1a1a1a;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`
