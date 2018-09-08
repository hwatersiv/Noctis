import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center'
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0
  },
  menuItem: {
    fontFamily: "'TulpenOne-Regular', sans-serif",
    fontSize: '1.25em'
  }
})

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuIsOpen: false,
    }
  }

  render() {
    const {classes} = this.props

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense" className={classes.toolBar}>
            <List component="nav" className={classes.list}>
              <ListItem button component={Link} to="/store">
                <Typography className={classes.menuItem} color="secondary">
                  Store
                </Typography>
              </ListItem>
              <ListItem button component={Link} to="/cart">
                <Typography className={classes.menuItem} color="secondary">
                  Cart
                </Typography>
              </ListItem>
              <ListItem button component={Link} to="/contact">
                <Typography className={classes.menuItem} color="secondary">
                  Contact
                </Typography>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}



export default withStyles(styles, { withTheme: true })(Navbar);