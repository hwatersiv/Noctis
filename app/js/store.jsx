import React from 'react';
import Item from './item.jsx';

const ITEMS = [
  {
    name:'Beanie',
    id: 1,
    description: 'High Quality Wool. Handmade.',
    image: 'http://www.fillmurray.com/300/300',
    price: '$40.00',
  },
  {
    name:'Scarf',
    id:2,
    description: 'High Quality Wool. Handmade',
    image: 'http://www.fillmurray.com/300/300',
    price: '$30.00',
  },
  {
    name:'Arm Warmers',
    id:3,
    description: 'Lorem ipsum dolor sit amet, vulputate urna imperdiet, nascetur arcu pellentesque tincidunt vitae tortor nam, lectus ultrices, tellus id nascetur, sapien lacus ut volutpat in. Pretium dolor quis, augue eu eros magna pellentesque ut, non scelerisque rhoncus elit fermentum. Integer curabitur cursus diam nam vel dui, euismod diam tellus a placerat, ac vitae integer ac. Ante urna, est neque placerat mi vel. Mi donec, a etiam lorem dolor morbi pretium, id tincidunt eu, faucibus risus suspendisse nullam. Condimentum eu tempus hac a, hendrerit sed donec, blandit tristique erat vitae pellentesque sodales, pharetra semper risus, ac nullam.',
    image: 'http://www.fillmurray.com/300/300',
    price: '$20.00',
  },
];

class Store extends React.Component {

  handleAddToCart (item) {
    console.log(item);
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
          onClick={this.handleAddToCart.bind(null,item)} />
      )
    })

    return (
      <div>{itemNodes}</div>
    )
  }
}

export default Store;