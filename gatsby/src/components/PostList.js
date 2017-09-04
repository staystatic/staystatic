import React from 'react'
import Link  from 'gatsby-link'

export default ({posts}) =>
<ul>
  {posts.map( ({node:post}) => <li><Link to={post.fields.slug}>{post.frontmatter.title}</Link></li> )}
</ul>
