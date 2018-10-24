import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBot from "../components/Chatbot";

const TemplateWrapper = ({
  children,
  location,
  data: {
    site: {
      siteMetadata: { title, subtitle, slogan }
    }
  }
}) => (
  <div id="Wrapper">
    <ChatBot />
    <Helmet
      title={subtitle}
      titleTemplate={`%s - ${title}`}
      bodyAttributes={{
        class: `s-${(location.search && location.search.substr(1)) || "none"}`
      }}
    >
      <meta name="description" content={slogan} />
      <meta name="theme-color" content="#070708" />
      <meta name="twitter:site" content="@AlarmbotsES" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Alarmbots" />
      <link
        rel="icon"
        type="image/png"
        href="images/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="images/favicon-16x16.png"
        sizes="16x16"
      />
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "https://alarmbots.com",
          "name": "AlarmBots",
          "description": "El bot que compara gratis alarmas para hogar o negocio desde tu WhatsApp",
          "logo": "https://alarmbots.com/images/icon.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34-646947931",
            "contactType": "technical support",
            "areaServed": "ES",
            "availableLanguage": "Spanish"
          },
          "sameAs": [
            "https://www.facebook.com/alarmbots",
            "https://www.instagram.com/Alarmbots/",
            "https://twitter.com/AlarmbotsES",
            "https://api.whatsapp.com/send?phone=34699914244&text=Hola",
            "https://telegram.me/AlarmBotsBot"
          ]
        }
      `}</script>
      <html lang="es" />
    </Helmet>
    <Navbar isHome={location.pathname === "/"} />
    <div id="Content"> {children()} </div>
    <Footer />
    <div id="preloader">
      <div id="loader">
        <div className="line-scale-pulse-out">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const TemplateWrapperQuery = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title
        subtitle
        slogan
      }
    }
  }
`;
