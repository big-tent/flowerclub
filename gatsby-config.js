const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `Canterbury Flower Club`,
    description: `The website of Canterbury Flower Club`,
    author: `Big Tent`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canterbury Flower Club`,
        short_name: `Flower Club`,
        start_url: `/`,
        background_color: `#fdc300`,
        theme_color: `#fdc300`,
        display: `standalone`,
        icon: `src/images/flower-club-logo-flower.svg`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
