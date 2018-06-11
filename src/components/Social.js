import React from 'react';
import { isMobile } from 'react-device-detect';
import filter from 'lodash/filter';
import first from 'lodash/first';

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
      name: 'whatsapp',
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
      name: 'telegram',
      bot: true
    },
    {
      title: 'Twitter',
      color: '#449eda',
      link: 'https://twitter.com/AlarmbotsES',
      name: 'twitter',
      bot: false
    },
    {
      title: 'Instagram',
      color: '#449eda',
      link: 'https://www.instagram.com/alarmbotses/',
      name: 'instagram',
      bot: false
    }
  ];
};

const Social = (props) => (
  <ul {...props}>
    {networks(props.type) &&
      networks(props.type).map((network) => (
        <li key={network.name}>
          <a href={network.link}>
            <i className={`fab fa-${network.name}`} />
          </a>
        </li>
      ))}
  </ul>
);

const bots = (type) => filter(networks(type), { bot: true });
const btn = (name, type) => first(filter(networks(type), { name, bot: true }));

export { networks, bots, btn };
export default Social;
