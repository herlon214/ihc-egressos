import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit ,
  },
});

const NewButton = ({ classes, title, icon, color }) => {
  return (
    <Button variant="fab" className={classes.button}  color={color}>
      <i className='material-icons'> {icon} </i>
      {title}
    </Button>
  )
}

export default withStyles(styles)(NewButton) 
