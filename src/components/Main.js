// Libs
import React from 'react'


// Components
import { Paper, withStyles, Grid, Typography } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'

const styles = theme => ({
  main: {
    marginTop: '5em',
    marginBottom: theme.spacing.unit * 5,
    height: '350px',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const Home = ({ classes }) => (
  <div>
    <Grid container className={classes.main}>
      <Grid item xs={6}>
        <Paper className={ classes.paper }>
          <Typography style={{ padding: '1em', textAlign: 'center' }}> Bem Vindo   </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

const Main = ({ classes }) => (
  <div>
    <Switch>
      <Route path='/' exact
        render={(props) => <Home {...props} classes={classes} />}
      />
      <Route path='/login' 
        render={(props) => <Login {...props} classes={classes}  />} 
      />
    </Switch>
  </div>
);

export default withStyles(styles)(Main);
