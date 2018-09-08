/*eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import createBrowserHistory from 'history/createBrowserHistory';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Home from './components/home/home';
import Store from './components/store/store';
import Cart from './components/cart/cart';
import Contact from './components/contact/contact';
import ItemDetail from './components/store/itemDetail';


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

// const history = createBrowserHistory()

render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <div> 
        <Home />
        <Switch>
          <Route exact path="/store" component={Store}/>
          <Route exact path="/store/:id" component={ItemDetail}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>    
    </Router>
  </MuiThemeProvider>,
  document.getElementById('noctis')
);

module.hot.accept();