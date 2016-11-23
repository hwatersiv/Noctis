import React from 'react';
import AppBar from 'material-ui/AppBar';
import {deepPurple200, grey900} from 'material-ui/styles/colors'; 
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const styles = {
  navbar: {
    backgroundColor: deepPurple200,
  }
}

class Navbar extends React.Component {
  onMenuClick() {
    
  }

  render () {
    return (
      <AppBar
        style={styles.navbar}
        title="Noctis"
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><MenuIcon color={grey900}/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
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