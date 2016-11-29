import React from 'react';
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
  onMenuClick() {
    
  }

  render () {
    return (
      <AppBar
        style={styles.navbar}
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><MenuIcon color={grey900}/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >
            <MenuItem primaryText="Store" />
            <MenuItem primaryText="Cart" />
            <MenuItem primaryText="Contact" />
            
          </IconMenu>
        }
      />
    )
  }
}

export default Navbar;