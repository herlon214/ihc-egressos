import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit ,
  },
});

const NewButton = ({ classes }) => {
  return (
    <Button variant="extendedFab" color='secondary' className={classes.button}>
      <i className='material-icons' style={{marginRight: '.3em'}}> add </i>
      Novo
    </Button>
  )
}

export default withStyles(styles)(NewButton) 
