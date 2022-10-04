require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `mindbodygreen`,
    description: `Get your daily horoscope reading right here courtesy of the Astrotwins`,
    author: `@mindbodygreen`,
    siteUrl: process.env.GATSBY_LOCAL_SITE, // without the trailing slash
  },
  trailingSlash: "never",
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`, // Needed for dynamic images
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-plugin-preact`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-plugin-styled-components",
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_TOKEN,
    //     environment: process.env.CONTENTFUL_ENVIRONMENT,
    //     host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     password: process.env.SHOPIFY_API_PASSWORD,
    //     storeUrl: `${process.env.SHOPIFY_SITE}.myshopify.com`,
    //     shopifyConnections: ["collections"],
    //   },
    // },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: "MBG",
    //     fieldName: "mbg",
    //     url: process.env.MBG_API,
    //     headers: {
    //       "x-api-key": process.env.MBG_API_KEY,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Link: </fonts/abrilfatface-regular-webfont.woff>; rel=preload; as=font; crossorigin;",
          "Link: </fonts/monoline-regular.otf>; rel=preload; as=font; crossorigin;",
          "Link: </fonts/maax-webfont.woff>; rel=preload; as=font; crossorigin;",
          "Link: </fonts/maax-medium-webfont.woff>; rel=preload; as=font; crossorigin;",
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
