import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core';
import CompaniesList from './CompaniesList';
import NewButton from './NewButton';

const styles = theme => ({
  main: {
    marginTop: '5em',
    height: '150%',
    justifyContent: 'flex-start!important'
  },
  paper: {
    padding: theme.spacing.unit * 2
  },

})

class Companies extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.main}>
        <Grid item xs={12}>
          <CompaniesList />
        </Grid>
        <Grid item xs={2} >
          <NewButton />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Companies)
