import React from 'react'
import Link  from 'gatsby-link'


import links from '../data/links'     // check rename to data.links - why? Why not? possible?

import PostList from '../components/PostList'
import LinkList from '../components/LinkList'


export default ({data}) => {

 const posts = data.allMarkdownRemark.edges

 return <div>
          <div>
            <b>News 'n' Updates</b>
            <PostList posts={posts} />
          </div>
          <div>
            <b>Links 'n' Bookmarks</b>
            <LinkList links={links} />
          </div>
       </div>
}


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter { title }
          fields      { slug  }
        }
      }
    }
  }
`
