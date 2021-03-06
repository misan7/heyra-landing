import React from 'react';
import Typography from 'typography';
import { TypographyStyle } from 'react-typography';

const typography = new Typography();

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="keywords"
            content="bot, chatbot, whatsapp, alarma, sistema de alarma, sistemas de protección, alarmas para casa, alarmas hogar, sistemas de alarmas, sistemas de seguridad para casa, instalación de alarmas, alarmas para negocios"
          />
          <meta name="author" content="BotSpecialist" />

          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          {css}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/digitalbreed/jquery.fbmessenger/v0.0.9/dist/jquery.fbmessenger.css"
          />
          <link rel="stylesheet" href="/css/base.css" />
          <link rel="stylesheet" href="/css/vendor.css" />
          <link rel="stylesheet" href="/css/main.css" />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="canonical" href="https://alarmbots.com" />
          <link rel="canonical" href="https://www.alarmbots.com" />
          <link rel="canonical" href="https://alarmbots.es" />
          <link rel="canonical" href="https://www.alarmbots.es" />
          <link rel="canonical" href="https://alarmacerovision.com" />
          <link rel="canonical" href="https://alarmacerovision.es" />
          <link rel="canonical" href="https://alarmbots.netlify.com" />
          <link rel="alternate" hrefLang="es" href="https://alarmbots.com" />
          <meta
            name="google-site-verification"
            content="a8WS0o4hgeS_klEUhTfMY9f2y4S0xj2PihEKpTcaQOY"
          />
        </head>
        <body id="top" {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script src="/js/jquery-3.2.1.min.js" />
          <script src="/js/plugins.js" />
          <script src="/js/main.js" />
          <script src="/js/jquery.fbmessenger.js" />
        </body>
      </html>
    );
  }
};
