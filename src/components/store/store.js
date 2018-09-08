import React from 'react';
import PropTypes from 'prop-types';
import Item from './item.js';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import ItemsAPI from '../../api/itemsAPI';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
  }
})

class Store extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  handleAddToCart (item) {
  }

  render () {
    const { classes } = this.props;
    const itemNodes = ItemsAPI.getAllItems().map((item) => {
      return (<Item key={item.id} item={item}/>)
    })

    

    return (
      <GridList cellHeight={200} cols={3} className={classes.root}>
        {itemNodes}
      </GridList>
    )
  }
}

Store.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Store);