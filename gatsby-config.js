module.exports = {
  siteMetadata: {
    title: `Alarmbots`,
    subtitle: `El comparador inteligente`,
    slogan: `Compara gratis alarmas para hogar o negocio desde tu Whatsapp`,
    about: {
      title: `Somos`,
      subtitle: `AlarmBots`,
      description: `Compara gratis alarmas para hogar o negocio desde tu Whatsapp`,
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
        pixelId: '1925256160881816'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-117610431-2`,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [`/preview/**`]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:
          'Alarmbots - Compara gratis alarmas para hogar o negocio desde tu Whatsapp',
        short_name: 'Alarmbots',
        start_url: '/',
        background_color: '#070708',
        theme_color: '#070708',
        display: 'minimal-ui',
        icon: 'static/images/icon.jpg'
      }
    }
  ]
};
