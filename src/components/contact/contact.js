import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import Email from '@material-ui/icons/Email';

const jenicaAvatar = require('../../assets/images/jenica.png');
const facebookIcon = require('../../assets/icons/facebook-box.png');

const styles = theme => ({
  root:{
    display: "flex"
  },
  avatar: {
    width: 60,
    height: 60
  }
})

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}
            justify="center"
            direction="column"
            alignItems="center">
        <Avatar className={classes.avatar}
                alt="Jenica Waters"
                src={jenicaAvatar} />
        <List component="nav">
          <ListItem button component="a" href="https://www.facebook.com/noctisknits/">
            <ListItemIcon>
              <img component="img" src={facebookIcon} alt="facebook" />
            </ListItemIcon>
            <ListItemText primary="Noctis Knits"></ListItemText>
          </ListItem>
        </List>
      </Grid>
    )
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Contact);