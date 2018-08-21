import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
})

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuIsOpen: false,
    }
  }

  handleOpenMenu = () => {
    console.log("Im here", this.state)
    this.setState(state => ({menuIsOpen: !state.menuIsOpen}));
  };

  handleMenuClose = event => {
    if(this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ menuIsOpen: false });
  }

  render() {
    const {classes} = this.props
    const {menuIsOpen} = this.state;


    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        aria-owns={menuIsOpen ? 'menu-list-grow': null}
                        aria-haspopup="true"
                        buttonRef={node => {
                          this.anchorEl = node;
                        }}
                        onClick={this.handleOpenMenu}>
              <MenuIcon />
            </IconButton>
            <Popper open={menuIsOpen} anchorEl={this.anchorEl} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleMenuClose}>
                      <MenuList>
                        <MenuItem onClick={this.handleMenuClose}
                                  component={Link} to="/store">
                          Store
                        </MenuItem>
                        <MenuItem onClick={this.handleMenuClose}
                                  component={Link} to="/cart">
                          Cart
                        </MenuItem>
                        <MenuItem onClick={this.handleMenuClose}
                                  component={Link} to="/contact">
                          Contact
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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