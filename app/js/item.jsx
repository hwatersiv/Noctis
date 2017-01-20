import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const styles = {
  container: {
    width: '30%',
    display: 'inline-block',
    margin: 15,
  },
  dialog: {
    color: 'white',
  },
  cardActions:{
    display: 'flex'
  },
  price: {
    verticalAlign: 'middle',
  }
}

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    this.changeOpenState = this.changeOpenState.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  changeOpenState () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    const openState = this.state.open
    return (
      <Card style={styles.container}>
        <CardMedia
          overlay={
            <CardTitle title={this.props.name} subtitle={this.props.price} />
          }
        >
          <img src={this.props.image} />
        </CardMedia>
        <CardActions>
          <FlatButton label="Details" onTouchTap={this.changeOpenState} />
            <Dialog
              modal={false}
              onRequestClose={this.handleClose}
              open={openState}
              >
              <div style={styles.dialog}>{this.props.description}</div>
            </Dialog>
          <FlatButton label="add to cart" onClick={this.props.onClick}/>
        </CardActions>
      </Card>
    )
  }
};

export default Item;