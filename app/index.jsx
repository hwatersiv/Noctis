import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './assets/css/base.css';
import Noctis from './js/home.jsx';

const ITEMS = [
  {
    name:'Beanie',
    id: 1,
    description: 'High Quality Wool. Handmade.',
    subtitle: 'Warms even the coldest...head',
    image: 'http://www.fillmurray.com/200/300',
    price: '$40.00',
  },
  {
    name:'Scarf',
    id:2,
    description: 'High Quality Wool. Handmade',
    subtitle: 'Warms even the coldest...neck',
    image: 'http://www.fillmurray.com/200/300',
    price: '$30.00',
  },
  {
    name:'Arm Warmers',
    id:3,
    description: 'High Quality Wool. Handmade',
    subtitle: 'Warms even the coldest...arm',
    image: 'http://www.fillmurray.com/200/300',
    price: '$20.00',
  },
];
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDom.render(<Noctis data={ITEMS}/>, document.getElementById('noctis'));