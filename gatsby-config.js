module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://gmail.us4.list-manage.com/subscribe/post?u=914ae019ecb5ca02710493cdd&amp;id=d7c63b789d",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `700`, `900` ]
          },
          {
            family: `Ubuntu`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `700` ]
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};