import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit ,
  },
});

const ButtonComponent = ({ classes, title, icon, color, handler = () => {}, owner }) => {
  return (
    <Button 
      variant="fab" className={classes.button} color={color}
      onClick={() => handler(owner)}>
      <i className='material-icons'> {icon} </i>
      {title}
    </Button>
  )
}

export default withStyles(styles)(ButtonComponent) 
