import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'


import PostList from 'components/PostList'


export default class PostTemplate extends React.Component {

  render() {

    const posts = []
    // Collect all posts from  pages
    this.props.route.pages.forEach( page => {
      if( page.path && page.path.includes( '/posts' )) {
        posts.push( page );
      }
    });

    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <div>
          <b>News 'n' Updates</b>
          <PostList posts={posts}/>
        </div>
      </div>
    )
  }

  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route:    React.PropTypes.object,
  }
}
