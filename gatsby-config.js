module.exports = {
  pathPrefix: "/idus-cloneCoding",
  siteMetadata: {
    title: `제이디어스 `,
    description: `아이디어스 클론 코딩 사이트입니다.`,
    author: `jiindev`,
  },
  plugins: [
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
        name: `제이디어스 - 아이디어스 클론코딩 사이트`,
        short_name: `제이디어스`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5283db`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
