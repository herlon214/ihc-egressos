// Libs
import React from 'react'

// Components
import { Paper, withStyles, Grid, Typography } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Companies from '../pages/Companies'
import MessagesPage from '../pages/Messages'
import EgressesPage from '../pages/Egresses'
import MyDataPage from '../pages/MyData'
import HelpPage from '../pages/Help'
import JobsPage from '../pages/Jobs'
import TestimonialsPage from '../pages/Testimonials'
import Colleges from '../pages/Colleges'
import Courses from '../pages/Courses'

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
    path: '/colleges',
    component: Colleges
  },
  {
    path: '/coordinators',
    component: Login
  },
  {
    path: '/egresses',
    component: EgressesPage
  },
  {
    path: '/messages',
    component: MessagesPage
  },
  {
    path: '/companies',
    component: Companies
  },
  {
    path: '/testimonials',
    component: TestimonialsPage
  },
  {
    path: '/my-data',
    component: MyDataPage
  }
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
    component: Courses
  },
  {
    path: '/egresses',
    component: EgressesPage
  },
  {
    path: '/testimonials',
    component: TestimonialsPage
  },
  {
    path: '/jobs',
    component: JobsPage
  },
  {
    path: '/help',
    component: HelpPage
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
