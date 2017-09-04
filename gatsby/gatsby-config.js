module.exports = {
  pathPrefix: `/sites/gatsby-graphql`,
  siteMetadata: {
    title: "Gatsby (+GraphQL) Stay Static Site Sample",
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
