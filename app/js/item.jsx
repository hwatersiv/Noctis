import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  container: {
    width: '25%',
    fontSize: 24,
  }
}

class Item extends React.Component {
  render () {
    return (
      <Card style={styles.container}>
        <CardMedia
          overlay={<CardTitle title={this.props.name} subtitle={this.props.subtitle} />}>
          <img src={this.props.image} />
        </CardMedia>
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton label={this.props.price} />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
};

export default Item;