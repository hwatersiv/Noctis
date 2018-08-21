import React from 'react';
import Store from '../store/store.js';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.getInitalCartState = this.getInitalCartState.bind(this)
  }

  getInitalCartState () {
  }

  addToCart (item) {
    const cartItems = this.state.cartItems

    cartItems.push(item)
    this.setState({cartItems: cartItems})
  }

  removeFromtCart (item) {
    const cartItems = this.state.cartItems

    cartItems.forEach(function (cartItem) {
      if (cartItem === item) {
        cartItems.pop(cartItem)
      }
    })

    this.setState({cartItems: cartItems})
  }

  render() {
    return(
      <div>The Cart goes here!</div>
    )
  }
}

export default Cart;