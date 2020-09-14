
import NextApp from 'next/app';
import React from "react";
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from 'styled-components';
const theme = {
  primary: 'green',
}

export default class MyApp extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}