import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  cardActions:{
    display: 'flex',
    justifyContent: "space-between"
  }
});

class Item extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    const {classes} = this.props

    return (
      <Card style={styles.container}>
        <CardMedia component='img'
                   image={this.props.image}
                   title={this.props.name}>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.name}
          </Typography>
          <Typography component="p">
            {this.props.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div>
            <Button size="small" color="primary">Add to Cart</Button>
            <Button size="small" color="primary">More Info</Button>
          </div>
          <Typography component="span">{this.props.price}</Typography>
        </CardActions>
      </Card>
    )
  }
};

Item.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Item);