/*eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Home from './components/home/home';
import Store from './components/store/store';
import Cart from './components/cart/cart';
import Contact from './components/contact/contact';


const browserHistory = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e6ceff',
      main: '#b39ddb',
      dark: '#836fa9',
      contrastText: '#000000',
    }
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <Router history={browserHistory}>
      <div> 
        <Home />
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route path="/store" component={Store}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>    
      </Router>
  </MuiThemeProvider>,
  document.getElementById('noctis')
);

module.hot.accept();