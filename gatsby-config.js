require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Raywon Talks",
    titleTemplate: "",
    description: "Raywon's Blog",
    url: "https://raywontalks.com",
    siteUrl: "https://raywontalks.com",
    image: "raywon-bitmoji.png",
    author: "Raywon Kari",
    twitterUsername: "@raywonkari",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145916942-2",
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raywon's blog`,
        short_name: `raywontalks`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/raywon-bitmoji.png`,
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/articles`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [require("remark-emoji")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        excludePaths: [
          "/",
          "/articles",
          "/articles/",
          "/tags",
          "/tags/",
          "/subscribe/",
          "/subscribe",
          "/404/",
          "/404",
          {
            regex: "^/tags",
          },
        ],
        color: "#000000",
      },
    },
    {
      resolve: `gatsby-plugin-feed-generator`,
      options: {
        generator: `GatsbyJS`,
        rss: true,
        json: true,
        atom: true,
        siteQuery: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
              author
            }
          }
        }`,
        feeds: [
          {
            name: "feed",
            query: `{
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]},
                limit: 100,
              ) {
                edges {
                  node {
                    html
                    frontmatter {
                      date
                      slug
                      title
                    }
                  }
                }
              }
            }`,
            normalize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  html: edge.node.html,
                }
              })
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
  ],
}
