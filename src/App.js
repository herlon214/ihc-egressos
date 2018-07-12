// Libs
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Components
import Grid from '@material-ui/core/Grid'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = (props) => (
  <Grid container>
    <Grid item xs={12} style={{marginBottom: '100px'}}>
      <Navbar user={props.user} />
    </Grid>

    <Grid item xs={12} style={{marginBottom: '100px'}}>
      <Main auth={props.user !== null} />
    </Grid>
  </Grid>
)

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.get('actual')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
