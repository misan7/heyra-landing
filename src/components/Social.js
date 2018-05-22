import React from 'react';

const Social = (props) => (
  <ul {...props}>
    <li>
      <a href="#">
        <i className="fa fa-whatsapp" />
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-telegram" />
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-facebook" />
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-twitter" />
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-instagram" />
      </a>
    </li>
  </ul>
);

export default Social;
