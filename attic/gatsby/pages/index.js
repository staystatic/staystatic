import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import links from 'data/links'     // check rename to data.links - why? Why not? possible?

import PostList from 'components/PostList'
import LinkList from 'components/LinkList'


export default class Index extends React.Component {

  render () {

    const posts = []
    // Collect all posts from  pages
    this.props.route.pages.forEach( page => {
      if( page.path && page.path.includes( '/posts' )) {
        posts.push( page );
      }
    });

    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <div>
            <b>News 'n' Updates</b>
            <PostList posts={posts}/>
          </div>
          <div>
            <b>Links 'n' Bookmarks</b>
            <LinkList links={links}/>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
