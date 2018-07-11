// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/users'

// Components
import { withStyles,  Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LoginForm from './LoginForm'

const styles = theme => ({
  main: {
    marginTop: '5em',
    height: '350px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItems: {
    padding: theme.spacing.unit * 2
  }
})

class LoginComponent extends Component {
  constructor (props) {
    super(props)

    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin (fields) {
    if (fields.password.length < 1 || fields.username.length < 11) {
      return
    }
    this.props.onLogin({
      national_register_number: fields.username,
      password: fields.password
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <Grid container justify='center' className={classes.main} >
          <Grid item xs={12} sm={8}>
            <Typography variant='display1'
              style={{ textAlign: 'center' }}>
              Acesso de usuário
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Grid container className={classes.grid}>
                { this.props.logged
                  ? <Typography> {this.props.user.get('name')} </Typography>
                  : <LoginForm error={this.props.error} onLogin={this.submitLogin} />
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    error: state.users.get('error'),
    user: state.users.get('actual'),
    logged: state.users.get('actual') !== null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: (user) => {
      dispatch({ type: actions.USERS_LOGIN, payload: user })
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginComponent))

export default Login
