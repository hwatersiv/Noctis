import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ItemsAPI from '../../api/itemsAPI';


const styles = theme => ({
  itemImage: {
    width: "100%",
    height: "auto"
  },
  itemPrice:{
    textAlign: "center"
  },
  itemDesc: {
    height: 250
  }
});

class ItemDetail extends React.Component {
  constructor (props, context) {
    super(props, context)

  }

  getItem() {
    const item = ItemsAPI.getItem(Number(this.props.match.params.id))
    return item
  }

  handleAddToCart (e) {
    console.log("Send to Cart", e)
  }

  render () {
    const {classes} = this.props
    const item = this.getItem();

    return (
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <img className={classes.itemImage} src={item.image} alt={item.name}/>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Typography variant="headline" gutterBottom>{item.name}</Typography>
            <Typography variant="body1" className={classes.itemDesc} gutterBottom>
              {item.description}
            </Typography>
            <Grid container justify="flex-start" alignItems="center">
              <Button variant="contained" color="primary" onClick={() => this.handleAddToCart(item.id)}>
                Add To Cart
              </Button>
              <Grid item xs={4} className={classes.itemPrice}>
                <Typography variant="headline">{item.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
};

ItemDetail.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ItemDetail);