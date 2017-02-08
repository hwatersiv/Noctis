import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import { Link } from 'react-router';
import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {indigo500} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import SvgIcon from 'material-ui/SvgIcon';

const jenicaAvatar = require('../assets/images/jenica.png');
const facebookIcon = require('../assets/icons/facebook-box.png');

const styles = {
  paperStyles: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  avatarStyle:{
    alignSelf: 'center',
  },
  listStyle: {
    width: '25%',
    alignSelf: 'center',
  },
  menuItem: {
  }

}

class Contact extends React.Component {
  render () {
    return (
      <Paper style={styles.paperStyles} zDepth={1}>
        <Avatar src={jenicaAvatar} size={80} style={styles.avatarStyle}/>
        <List style={styles.listStyle}>
          <ListItem
            leftIcon={<CommunicationEmail color={indigo500} />}
            primaryText="jenica@noctisknits.com"
            href="mailto:jenica@noctisknits.com"
          />
          <Divider inset={true} />
          <ListItem
            leftIcon={<img src={facebookIcon} />}
            style={styles.menuItem}
            primaryText="Noctis Knits"
            href="//www.facebook.com/noctisknits/" />
        </List>
      </Paper>
    )
  }
}

export default Contact;