import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {deepPurple200,
        grey900,
        grey500,
        grey400} from 'material-ui/styles/colors'; 
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const styles = {
  navbar: {
    backgroundColor: grey500,
  }
}

class Navbar extends React.Component {
  render () {
    return (
      <AppBar
        style={styles.navbar}
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><MenuIcon color={grey900}/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Store" containerElement={<Link to="/store"/>} />
            <MenuItem primaryText="Cart" containerElement={<Link to="/cart"/>} />
            <MenuItem primaryText="Contact" containerElement={<Link to="/contact"/>} />
            
          </IconMenu>
        }
      />
    )
  }
}

export default Navbar;