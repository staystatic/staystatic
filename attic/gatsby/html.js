import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'


const BUILD_TIME = new Date().getTime()


export default class HTML extends React.Component {

  render() {
    const { body } = this.props
    const title = DocumentTitle.rewind()

    let css
    if( process.env.NODE_ENV === 'production' ) {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }

  static propTypes = {
    body: React.PropTypes.string,
  }
}
