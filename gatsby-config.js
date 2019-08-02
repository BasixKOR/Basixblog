/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `otu6gxcj51hh`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Spoqa Han Sans'],
          urls: ['//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css']
        }
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-root-import'
  ]
}
