import React from 'react';

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

          {this.props.headComponents}
          {css}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="css/base.css" />
          <link rel="stylesheet" href="css/vendor.css" />
          <link rel="stylesheet" href="css/main.css" />

          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />

          <script src="js/modernizr.js" />
          <script src="js/pace.min.js" />
        </head>
        <body id="top" {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script src="js/jquery-3.2.1.min.js" />
          <script src="js/plugins.js" />
          <script src="js/main.js" />
        </body>
      </html>
    );
  }
};
