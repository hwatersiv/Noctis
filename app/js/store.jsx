import React from 'react';
import Item from './item.jsx';

class Store extends React.Component {

  render () {
    const itemNodes =  this.props.data.map((item) => {
      return (
        <Item 
          className="item"
          name={item.name}
          key={item.id}
          description={item.description}
          subtitle={item.subtitle}
          image={item.image}
          price={item.price} />
      )
    })

    return (
      <div>{itemNodes}</div>
    )
  }
}

export default Store;