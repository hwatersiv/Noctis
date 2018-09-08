import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
  root:{
    marginBottom: 8
  },
  icon: {
    color: 'grey',
    marginRight: 5
  }
});

const Item = props => {
  const {classes} = props
  const {item} = props

  const ItemLink = props => {
    return (
      <Link to={"/store/" + item.id}>
        <InfoIcon className={classes.icon}/>
      </Link>
    )
  }

  return (
    <GridListTile className={classes.root} key={item.id} cols={1}>
      <img src={item.image} alt={item.name} />
      <GridListTileBar
        title={item.name}
        subtitle={<span>Price: {item.price}</span>}
        actionIcon={
          <IconButton className={classes.icon}
                      component={ItemLink}>
          </IconButton>
        }
      />
    </GridListTile>
  )
};

Item.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Item);