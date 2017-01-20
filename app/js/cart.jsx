import React from 'react';
import Store from './store.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

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
      <RaisedButton label="functions test" onClick={this.getInitalCartState}/>
    )
  }
}

export default Cart;