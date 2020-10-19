require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'gatsby Tutorial',
    description: 'some random description',
    author: 'Tasha Hollingsworth',
    data: ['item 1', 'item 2'],
    person: {name: 'peter', age: '32 '},
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `bbnx849ufq6w`,
          accessToken: process.env.ACCESS_TOKEN,
        },
      },
  ]
}