import { AppProps } from 'next/app'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

const AppComponent: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;

  color: white;
  background-color: #1a1a1a;
}
`

export default AppComponent
