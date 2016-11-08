import React from 'react';
import {deepPurple100} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Store from './store.jsx';

const muiTheme = getMuiTheme(darkBaseTheme);

class Noctis extends React.Component {

  render() {

    return (
      <div>HELLO WORLD!!!!!</div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Store data={this.props.data}/>
      </MuiThemeProvider>
    );
  }
}

export default Noctis;