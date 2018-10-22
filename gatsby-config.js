module.exports = {
  siteMetadata: {
    title: `Heyra`,
    subtitle: `Heyra`,
    slogan: `Heyra es la amiga que organiza cenas y eventos con personas afines a tu personalidad y gustos`,
    about: {
      title: `Hola, me llamo`,
      subtitle: `HEYRA`,
      firstDescription: `Voy a ser tu asistente personal, estoy dotada de inteligencia
          artificial y mi propósito es ayudarte a conocer gente cómo tú.`,
      secDescription: `Te voy a escuchar y a conocer, ¡estoy impaciente por hablar contigo!
          Puedo buscarte un restaurante y reservar una mesa para ti y tu match,
          tengo mis contactos ¿sabes? Solamente necesito conocer tus gustos.`,
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
        pixelId: "1925256160881816"
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
        name: "Heyra - El Algoritmo de Compatibilidad",
        short_name: "Heyra",
        start_url: "/",
        background_color: "#070708",
        theme_color: "#070708",
        display: "minimal-ui",
        icon: "static/images/icon.jpg"
      }
    }
  ]
};
