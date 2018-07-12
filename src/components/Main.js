// Libs
import React from 'react'

// Components
import { Paper, withStyles, Grid, Typography } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Companies from './Companies'

const styles = theme => ({
  main: {
    marginTop: '5em',
    marginBottom: theme.spacing.unit * 5,
    height: '350px',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Home = ({ classes }) => (
  <div>
    <Grid container className={classes.main}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography style={{ padding: '1em', textAlign: 'center' }}> Bem Vindo   </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

const ProtectedRoutes = [
  {
    path: '/deans',
    component: Login
  },
  {
    path: '/courses',
    component: Login
  },
  {
    path: '/coordinators',
    component: Login
  },
  {
    path: '/egresses',
    component: Login
  },
  {
    path: '/messages',
    component: Login
  },
  {
    path: '/companies',
    component: Companies
  },
]
const Routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/courses',
    component: Login
  },
  {
    path: '/egresses',
    component: Login
  }
]

const Main = ({ classes, auth }) => (
  <Switch>
    {Routes.map((route) => (
      <Route
        exact
        key={route.path}
        path={route.path}
        render={(props) => ( 
        <route.component {...props} classes={classes} />)} />
    ))}
    {ProtectedRoutes.map((route) => (
      <Route
        exact
        key={route.path}
        path={route.path}
        render={(props) => (
          auth ? <route.component {...props} classes={classes} />
          : <Redirect to='/login' />)} />
    ))}
  </Switch>
)

export default withStyles(styles)(Main)
