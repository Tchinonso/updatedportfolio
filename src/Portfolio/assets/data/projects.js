import { v4 as uuidv4 } from 'uuid';
import BetArena from '../images/betarena.jpg';
import BetMart from '../images/betmart.jpg';
import Adams from '../images/adams.jpg';
import Pifortune from '../images/pifortune.jpg';
import DCC from '../images/dcc.jpg';
import PimallMetro from '../images/pimallmetro.jpg'

const projects = [
  {
    id: uuidv4(),
    name: 'BetArena',
    desc:
      'A Crypto based Betting site, which has other features like casino gaming and crypto trading',
    img: BetArena,
    link: 'https://tchinonso.github.io/betarena'
  },
  {
    id: uuidv4(),
    name: 'BetMart',
    desc:
      'A pure betting site, just like the likes of Betkings and bet naija, You can place a bet between two teams, in football,tennis,basket ball and others.',
    img: BetMart,
    link: 'https://tchinonso.github.io/betmart'
  },
  {
    id: uuidv4(),
    name: 'AdamSonic',
    desc:
      'This website is a portfolio website for a medical and pharmaceutical firm, you can order their products and contact their staff',
    img: Adams,
    link: 'https://tchinonso.github.io/adams'
  },
  {
    id: uuidv4(),
    name: "PIFORTUNE MARKET",
    desc:
      'A business crypto website, where customers can trade their pi coin and also purchase products and pay with pi coin.',
    img: Pifortune,
    link: 'https://pifortunemarket.site'
  },
  {
    id: uuidv4(),
    name: 'Pimallmetro plc',
    desc:
      'A business website where you can trade your pi coin and also purchase goods and services and pay with pi.',
    img: PimallMetro,
    link: 'https://pimallmetro.com'
  },
  {
    id: uuidv4(),
    name: 'DCC',
    desc:
      'This project is yet to be completed, it is done halfway, only functional on mobile screens, it is also crypto related.',
    img: DCC,
    link: 'https://tchinonso.github.io/dcc'
  },
];

export default projects;
