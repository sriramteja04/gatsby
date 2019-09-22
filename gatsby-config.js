module.exports = {
  siteMetadata: {
    title: 'author',
    description: 'just some description about our site',
    author: '@sriramteja',
    data: {
      name: 'Sri Ram',
      age: 25,
    },
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/data/`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // `gatsby-image`,
  ],
};
