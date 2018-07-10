// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/users'

// Components 
import { withStyles, Button, Typography, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  main: {
    marginTop: '5em',
    height: '350px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItems: {
    padding: theme.spacing.unit * 2
  }
})

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        username: '',
        password: ''
      },
      fieldsError: {
        username: '',
        password: ''
      },
      usernameInvalid: false,
      passwordValid: false
    }
    this.updateField = this.updateField.bind(this)
  }

  updateField(e) {
    const fields = this.state.fields
    fields[e.target.name] = e.target.value;
    if (e.target.name === 'username') {
      if (fields[e.target.name].length > 11 || fields[e.target.name].match(/\D/)) {
        return
      }
    }
    if (this.state.fields['username'].length < 11) {
      const fieldsError = {
        username: 'Seu CPF deve conter 11 dígitos'
      }
      const usernameInvalid = true
      this.setState({ fieldsError })
      this.setState({ usernameInvalid })
    } else if (this.state.fields['password'] < 1) {
      const fieldsError = {
        password: 'Senha não pode ser vazia'
      }
      const usernameInvalid = true
      this.setState({ fieldsError })
      this.setState({ usernameInvalid })
    } else {
      const fieldsError = {
        username: ''
      }
      const usernameInvalid = false
      this.setState({ fieldsError })
      this.setState({ usernameInvalid })
      this.setState({ fields })
    }
  }

  Login(e) {
    e.preventDefault();
    if (this.state.fields.password < 1) {
      return
    }
    this.props.onLogin({
      national_register_number: this.state.fields.username,
      password: this.state.fields.password
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Grid container justify="center" className={classes.main}>
          <Grid item xs={12} sm={8}>
            <Typography variant='display1' style={{ textAlign: 'center' }}> Acesso de usuário </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Grid container className={classes.grid}>
                <form onSubmit={(e) => this.Login(e)} >
                  <Grid item xs={12}>
                    <Typography> {this.props.error} </Typography>
                  </Grid>
                  <Grid item xs={10} sm={8} className={classes.gridItems}>
                    <FormControl className={classes.formControl} aria-describedby="name-error-text">
                      <InputLabel htmlFor="name-error"> CPF </InputLabel>
                      <Input name='username' id="name-error" error={this.state.usernameInvalid}
                        value={this.state.fields.username} onChange={this.updateField} />
                      <FormHelperText id="name-error-text">{this.state.fieldsError.username}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={10} sm={8} className={classes.gridItems}>
                    <FormControl className={classes.formControl} aria-describedby="pwd-error-text">
                      <InputLabel htmlFor="pwd-error"> Senha </InputLabel>
                      <Input type="password" name='password' id="pwd-error" error={this.state.passwordInvalid}
                        value={this.state.fields.password} onChange={this.updateField} />
                      <FormHelperText id="pwd-error-text">{this.state.fieldsError.password}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={10} sm={8} className={classes.gridItems}>
                    <Button type='submit' variant="contained" color="primary">
                      Acessar
                  </Button>
                  </Grid>
                </form>
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
    error: state.users.get('error')
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