import React, { Fragment } from "react"
import Document, { Main, NextScript, DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const newContext = { ...context }
    try {
      newContext.renderPage = () =>
        context.renderPage({
          enhanceApp: App => props => {
            const { Component, router, pageProps } = props
            return sheet.collectStyles(<App Component={Component} router={router} pageProps={pageProps} />)
          },
        })
      const initialProps = await Document.getInitialProps(newContext)
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <html lang="ja">
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
