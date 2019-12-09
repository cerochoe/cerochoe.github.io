/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jeongbin Cero Choe`,
    description: `anti-apple`,
    copyright: {
      name: `CERO.KR`,
      startYear: `2018`
    },
    siteUrl: `http://cero.kr`,
    contacts: [
      {
        channel: `linkedin`,
        url: `http://www.linkedin.com/in/cerowind`
      },
      {
        channel: `facebook`,
        url: `http://www.facebook.com/jeongbin.choe`
      },
      {
        channel: `email`,
        url: `mailto:cerowind@gmail.com`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
}
