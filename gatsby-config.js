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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canterbury Flower Club`,
        short_name: `Flowerclub`,
        start_url: `/`,
        background_color: `#fdc300`,
        theme_color: `#fdc300`,
        display: `standalone`,
        icon: `src/images/yellow-rose-clipart-svg-829971-2866508.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
