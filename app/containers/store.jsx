import React from 'react';
import Item from '../components/item.jsx';
import { getInventory } from '../actions/actions.js';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  }
}

class Store extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps () {
    getInventory().then(function (data) {
      let ITEMS = data;
    });
  }

  handleAddToCart (item) {
  }

  render () {
    const itemNodes =  ITEMS.map((item) => {
      return (
        <Item 
          className="item"
          name={item.name}
          key={item.id}
          description={item.description}
          subtitle={item.subtitle}
          image={item.image}
          price={item.price}
          onClick={this.handleAddToCart.bind(null, item)} />
      )
    })

    return (
      <div>{itemNodes}</div>
    )
  }
}

export default Store;