import React from 'react';
import { isMobile } from 'react-device-detect';
import filter from 'lodash/filter';

const networks = [
  {
    title: 'Whatsapp',
    color: '#01e676',
    link: (text = 'Hola') =>
      `https://api.whatsapp.com/send?phone=34699914244&text=${text}`,
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
    link: () => 'https://telegram.me/AlarmBotsBot',
    class: 'telegram',
    bot: true
  },
  {
    title: 'Twitter',
    color: '#449eda',
    link: () => '#twitter',
    class: 'twitter',
    bot: false
  },
  {
    title: 'Instagram',
    color: '#449eda',
    link: () => '#instagram',
    class: 'instagram',
    bot: false
  }
];

const Social = (props) => (
  <ul {...props}>
    {networks &&
      networks.map((network) => (
        <li key={network.class}>
          <a href={network.link()}>
            <i className={`fab fa-${network.class}`} />
          </a>
        </li>
      ))}
  </ul>
);

const bots = () => filter(networks, { bot: true });

export { networks, bots };
export default Social;
