// Libs
import React, { Component } from 'react'

// Components 
import { withStyles, Button, Typography, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'


const styles = theme => ({
  main: {
    margin: '5em 0',
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

class LoginForm extends Component {
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
      passwordInvalid: false
    }
    this.updateField = this.updateField.bind(this)
  }

  updateField(e) {
    const fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    if (e.target.name === 'username') {
      if (fields[e.target.name].length > 11 || fields[e.target.name].match(/\D/)) {
        return
      } else if (fields['username'].length < 11) {
        const fieldsError = {
          username: 'Seu CPF deve conter 11 dígitos'
        }
        const usernameInvalid = true
        this.setState({ fieldsError })
        this.setState({ usernameInvalid })
      } else { //  length is equal 11 so remove the error
        const fieldsError = {
          username: ''
        }
        const usernameInvalid = false
        this.setState({ fieldsError })
        this.setState({ usernameInvalid })
      }
    } else if (fields['password'].length < 1) {
      const fieldsError = {
        password: 'Senha não pode estar em branco'
      }
      const passwordInvalid = true
      this.setState({ fieldsError })
      this.setState({ passwordInvalid })
    } else if (fields['password'].length > 16) {
      return
    } else {
      const fieldsError = {
        username: '',
        password: ''
      }
      const usernameInvalid = false
      const passwordInvalid = false
      this.setState({ fieldsError })
      this.setState({ usernameInvalid, passwordInvalid })
    }
    this.setState({ fields })
  }

  onLogin (e) {
    e.preventDefault();
    // console.log(this.state.fields)
    this.props.onLogin(this.state.fields);
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <form onSubmit={(e) => this.onLogin(e)} >
          <Grid item xs={12}>
            <Typography> {this.props.error} </Typography>
          </Grid>
          <Grid item xs={10} sm={8} className={classes.gridItems}>
            <FormControl aria-describedby="name-error-text">
              <InputLabel htmlFor="name-error"> CPF </InputLabel>
              <Input name='username' id="name-error"
                error={this.state.usernameInvalid}
                value={this.state.fields.username}
                onChange={this.updateField}
              />
              <FormHelperText id="name-error-text">
                {this.state.fieldsError.username}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={10} sm={8} className={classes.gridItems}>
            <FormControl aria-describedby="pwd-error-text">
              <InputLabel htmlFor="pwd-error"> Senha </InputLabel>
              <Input
                type="password" name='password'
                id="pwd-error" error={this.state.passwordInvalid}
                value={this.state.fields.password}
                onChange={this.updateField}
              />
              <FormHelperText id="pwd-error-text">
                {this.state.fieldsError.password}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={10} sm={8} className={classes.gridItems}>
            <Button type='submit' variant="contained" color="primary">
              Acessar
                  </Button>
          </Grid>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(LoginForm);