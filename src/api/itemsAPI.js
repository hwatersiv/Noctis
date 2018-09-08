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
  {
    name:'Something Else Awesome',
    id:4,
    description: 'Lorem ipsum dolor sit amet, vulputate urna imperdiet, nascetur arcu pellentesque tincidunt vitae tortor nam, lectus ultrices, tellus id nascetur, sapien lacus ut volutpat in. Pretium dolor quis, augue eu eros magna pellentesque ut, non scelerisque rhoncus elit fermentum. Integer curabitur cursus diam nam vel dui, euismod diam tellus a placerat, ac vitae integer ac. Ante urna, est neque placerat mi vel. Mi donec, a etiam lorem dolor morbi pretium, id tincidunt eu, faucibus risus suspendisse nullam. Condimentum eu tempus hac a, hendrerit sed donec, blandit tristique erat vitae pellentesque sodales, pharetra semper risus, ac nullam.',
    image: 'http://www.fillmurray.com/300/300',
    price: '$20.00',
  },
];


class ItemsAPI {
  static getAllItems() {
    return ITEMS
  }

  static getItem(id) {
    let singleItem = {};

    ITEMS.forEach(item => {
      if(item.id === id) {
        singleItem = item;
      }
    })

    return singleItem;
  }
}

export default ItemsAPI;