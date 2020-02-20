import React from "react"
import NextDocument, { DocumentContext } from "next/document"
import { ServerStyleSheet as StyledComponentSheets } from "styled-components"
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/styles"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => {
            const { Component, router, pageProps } = props
            return styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App Component={Component} router={router} pageProps={pageProps} />),
            )
          },
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}
