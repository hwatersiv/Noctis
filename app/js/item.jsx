import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const styles = {
  container: {
    width: '30%',
    display: 'inline-block',
    margin: 15,
  },
  cardActions:{
    display: 'flex'
  },
  price: {
    verticalAlign: 'middle',
  }
}

class Item extends React.Component {

  render () {
    return (
      <Card style={styles.container}>
        <CardMedia
          overlay={
            <CardTitle title={this.props.name} subtitle={this.props.price} />
          }
        >
          <img src={this.props.image} />
        </CardMedia>
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton label="add to cart" onClick={this.props.onClick}/>
        </CardActions>
      </Card>
    )
  }
};

export default Item;