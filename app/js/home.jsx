import React from 'react';
import {deepPurple100} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 200,
    marginLeft: '33%',
    paddingTop: 5,
    height: 210,
    width: '30%',
    color: deepPurple100,
  },
};

const muiTheme = getMuiTheme(darkBaseTheme);

class Noctis extends React.Component {

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Paper style={styles.container} zDepth={2}>
          <h1 className="noctis">Noctis</h1>
          <p className="statement">Dark and Otherworldly Knits</p>
          <p>Coming Soon</p>
          <a href="//www.facebook.com/noctisknits/">
           Visit us on Facebook
          </a>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Noctis;