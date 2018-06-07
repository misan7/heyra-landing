import React from 'react';
import { isMobile } from 'react-device-detect';
import filter from 'lodash/filter';

const networks = (type) => {
  let message = 'Hola';

  switch (type) {
    case 'business':
      message = 'Hola, tengo una empresa';
      break;
  }

  return [
    {
      title: 'WhatsApp',
      color: '#01e676',
      link: `https://api.whatsapp.com/send?phone=34699914244&text=${message}`,
      class: 'whatsapp',
      bot: true
    },
    // {
    //   title: isMobile ? 'Facebook' : 'Facebook Messenger',
    //   color: '#04bcfd',
    //   link: () => 'https://m.me/2080068382275303',
    //   class: 'facebook',
    //   bot: true
    // },
    {
      title: 'Telegram',
      color: '#449eda',
      link: 'https://telegram.me/AlarmBotsBot',
      class: 'telegram',
      bot: true
    },
    {
      title: 'Twitter',
      color: '#449eda',
      link: '#twitter',
      class: 'twitter',
      bot: false
    },
    {
      title: 'Instagram',
      color: '#449eda',
      link: '#instagram',
      class: 'instagram',
      bot: false
    }
  ];
};

const Social = (props) => (
  <ul {...props}>
    {networks(props.type) &&
      networks(props.type).map((network) => (
        <li key={network.class}>
          <a href={network.link}>
            <i className={`fab fa-${network.class}`} />
          </a>
        </li>
      ))}
  </ul>
);

const bots = (type) => filter(networks(type), { bot: true });

export { networks, bots };
export default Social;
