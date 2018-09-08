import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import ItemsAPI from '../../api/itemsAPI';

const styles = theme => (console.log("theme: ", theme),{
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
})

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    }
  }

  removeFromtCart(item) {
    const cartItems = this.state.cartItems

    cartItems.forEach(function (cartItem) {
      if (cartItem === item) {
        cartItems.pop(cartItem)
      }
    })
  }

  handleToggle(itemId) {
    const { cart } = this.state;
    const currentIndex = cart.indexOf(itemId);
    const newCart = [...cart];

    if (currentIndex === -1) {
      newCart.push(itemId);
    } else {
      newCart.splice(currentIndex, 1)
    }

    this.setState({
      cart: newCart,
    });

    console.log("this.state: ", this.state)
  }

  render() {
    const {classes} = this.props

    const cartItems = ItemsAPI.getAllItems().map(item => (
      <ListItem key={item.id}>
        <Avatar alt={item.name} src={item.image} />
        <ListItemText
          primary={item.name}
          secondary={item.price} />
        <ListItemSecondaryAction>
          <Checkbox
            onChange={() => this.handleToggle(item.id)}
            checked={this.state.cart.indexOf(item.id) !== -1}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ))

    return(
      <Grid container justify="center">
        <Grid item xs={8}>
          <List>
            {cartItems}
          </List>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Cart);