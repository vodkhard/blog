module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 672,
            },
          },
          `gatsby-remark-images-zoom`,
        ],
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Vodkhard`,
    author: `Hugo Knorr`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/vodkhard`,
      },
      {
        name: `github`,
        url: `https://github.com/vodkhard`,
      },
    ],
  },
}
