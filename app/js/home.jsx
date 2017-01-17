import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './navbar.jsx';

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
}

class Noctis extends React.Component {

  render() {
    return (
      <div>
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