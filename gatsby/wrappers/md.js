import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'


export default class MarkdownWrapper extends React.Component {

  render() {
    const post = this.props.route.page.data

    if( post.layout === "post" ) {
      // todo/fix: add missing post.date
     return (
       <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
         <div className="markdown">
           <h1>{post.title}</h1>
           <p>Aug 25, 2015</p>
           <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
     </DocumentTitle>
    )
  } else { // assume page layout as default
     return (
       <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
         <div className="markdown">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
         </div>
       </DocumentTitle>
    )
   }
  }

  static propTypes = {
    route: React.PropTypes.object,
  }
}
