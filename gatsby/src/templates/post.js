import React from "react"

import PostList from '../components/PostList'


export default ({ data }) => {
  const post  = data.markdownRemark
  const posts = data.allMarkdownRemark.edges

  return <div>
           <div>
             <h1>{post.frontmatter.title}</h1>
             <p>{post.frontmatter.date}</p>
             <div dangerouslySetInnerHTML={{ __html: post.html }} />
           </div>
           <div>
             <b>News 'n' Updates</b>
             <PostList posts={posts}/>
           </div>
        </div>
}


export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
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
