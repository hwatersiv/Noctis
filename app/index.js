import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './assets/css/base.css';
import Noctis from './js/home.jsx';
import Store from './js/store.jsx';
import Cart from './js/cart.jsx';
import Contact from './js/contact.jsx';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Noctis}>
      <IndexRoute component={Store} />
      <Route path="store" component={Store}/>
      <Route path="cart" component={Cart}/>
      <Route path="contact" component={Contact}/> 
    </Route>
  </Router>, 
  document.getElementById('noctis'));