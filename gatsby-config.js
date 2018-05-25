module.exports = {
  siteMetadata: {
    title: `Alarmbots`,
    subtitle: `El comparador inteligente`,
    slogan: `Usa la Inteligencia Artificial para comparar alarmas desde tu WhatsApp`,
    backgroundVideo: `aE9zjhlcmYI`,
    about: {
      title: `Somos`,
      subtitle: `AlarmBots`,
      description: `La inteligencia artificial que busca la mejor opción para proteger tu hogar y negocio`,
      totals: {
        business: 12,
        analyzed: 4681,
        protected: 1130
      }
    }
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: `images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1925256160881816',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-117610431-2`,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [`/preview/**`]
      }
    }
  ]
};
