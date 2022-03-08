require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Enterprise Opt-In Portal`,
    description: `Enterprise Opt-In Portal`,
    author: `@everlywell`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lrd5ir86ur94`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ydyvnem5zkxh`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.PRODUCT_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        apollo: path.join(__dirname, 'src/apollo'),
        services: path.join(__dirname, 'src/services'),
        utils: path.join(__dirname, 'src/utils'),
        tests: path.join(__dirname, 'src/tests'),
        styles: path.join(__dirname, 'src/styles'),
        contexts: path.join(__dirname, 'src/contexts'),
        queries: path.join(__dirname, 'src/queries'),
        images: path.join(__dirname, 'src/images'),
        api: path.join(__dirname, 'src/api'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-client-side-redirect`, // keep it in last in list
  ],
};
