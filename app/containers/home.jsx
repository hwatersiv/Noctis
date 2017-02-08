import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../components/navbar.jsx';

const muiTheme = getMuiTheme(darkBaseTheme);
const headerImage = require('../assets/images/noctisbckgrndTOP.png');

const styles = {
  titleBackground: {
    backgroundImage: 'url('+ headerImage +')',
    backgroundSize: 'cover',
    height: 400,
    width: '100%',
    fontFamily: "'Porcelain', sans-serif",
    fontSize: '20em',
    color: 'white',
    textAlign: 'center',
    lineHeight: '400px',
  },
  warning: {
    color: 'red',
    fontSize: '5em',
    textAlign: 'center',
    fontFamily: "sans-serif",
  },
}

// const ITEMS = fetch('/api/inventory')
//                 .then(function (response) {
//                   return response.json()
//                 });

class Noctis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
    } 
  }

  render() {
    return (
      <div>
        <div style={styles.warning}>Under Construction</div>
        <div style={styles.titleBackground}>Noctis</div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Navbar/>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          {this.props.children}
        </MuiThemeProvider>     
      </div>
    );
  }
}

export default Noctis;