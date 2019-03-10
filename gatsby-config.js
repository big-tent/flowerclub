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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canterbury Flower Club`,
        short_name: `Flowerclub`,
        start_url: `/`,
        background_color: `#fdc300`,
        theme_color: `#fdc300`,
        display: `standalone`,
        icon: `src/images/yellow-rose-png.jpg`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
