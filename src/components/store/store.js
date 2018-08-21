import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Item from './item.js';
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: '8px',
    paddingRight: '8px'
  },
})

class Store extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  handleAddToCart (item) {
  }

  render () {
    const { classes } = this.props
    const itemNodes = ITEMS.map((item) => {
      return (
        <Grid item xs={4}
              key={item.id}>
          <Item 
            className="item"
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            onClick={this.handleAddToCart.bind(null, item)} />
        </Grid>
      )
    })

    return (
      <Grid container
            className={classes.root}
            spacing={8}
            direction="row">
        {itemNodes}
      </Grid>
    )
  }
}

Store.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Store);