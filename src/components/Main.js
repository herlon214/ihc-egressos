// Libs
import React from 'react'


// Components
import { Paper, withStyles, Grid, Typography } from '@material-ui/core'
import { Switch, Route, Link } from 'react-router-dom'

const styles = theme => ({
  main: {
    marginTop: '5em',
    height: '350px',
  },
  paper: {
    height: '350px',
    width: '800px'
  },
})

const Home = ({ classes }) => (
  <div>
    <Grid container className={classes.main}>
      <Grid item xs={12}>
        <Paper className={ classes.paper }>
          <Typography style={{ padding: '1em' }}> <h1> Welcome</h1>  </Typography>
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
    </Switch>
  </div>
);

export default withStyles(styles)(Main);
