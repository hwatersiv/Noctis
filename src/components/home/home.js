import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Navbar from '../navbar/navbar.js';
import { withStyles } from '@material-ui/core/styles';

import '../../styles/index.css'

const headerImage = require('../../assets/images/noctisbckgrndTOP.png');

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '10px'
  },
  titleBackground: {
    backgroundImage: 'url('+ headerImage +')',
    backgroundSize: 'cover',
    height: 350,
    width: '100%',
    fontFamily: "'Porcelain', sans-serif",
    fontSize: '20em',
    color: 'white',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  title: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto"
  },
  warning: {
    color: 'red',
    fontSize: '5em',
    textAlign: 'center',
    fontFamily: "sans-serif",
  },
})

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
    } 
  }

  render() {
    const { classes } = this.props
    return (
      <Grid container
            className={classes.root}
            spacing={8}>
        <Grid item className={classes.titleBackground} xs={12}>
          <span className={classes.title}>Noctis</span>
        </Grid>
        <Navbar/>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Home);