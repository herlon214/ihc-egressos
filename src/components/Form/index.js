// Libs
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { TextField, Grid, Button, Typography, Input } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    width: '75%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden'
  },
  textField: {
    margin: '.4em'
  }
})


class FormComponent extends Component {
  constructor(props) {
    super(props)
    const {fields} = props 
    this.state = {
      fields: fields
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    const fields = Object.assign({}, this.state.fields)
    fields[ev.target.name] = ev.target.value;
    this.setState({ fields });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleInsert, onInsert, close } = this.props
    handleInsert(onInsert, this.state.fields)
    close()
  }

  render() {
    const { classes, fields, category } = this.props
    return (
      <Paper className={classes.root}>
        <Typography variant='display2'> Nova {category} </Typography>
        <form onSubmit={(e) => { this.handleSubmit(e) }}>
          <Grid container>
            {Object.keys(fields).map(field => (
              <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name={field}
                    label={fields[field]['label']}
                    value={this.state.fields[`${field}`]['data']}
                    onChange={this.handleChange}
                    className={classes.textField}
                    inputProps={{
                      maxLength: fields[field]['size']
                    }}
                  />
              </Grid>
            ))}
          </Grid>
          <Grid container justify='space-between'>
            <Button type='submit' variant='contained'
              color='primary' style={{ margin: '.3em' }}
            >
              Cadastrar
              </Button>
            <Button type='submit' variant='contained'
              color='secondary' style={{ margin: '.3em' }}
              onClick={() => this.props.close()}>
              Cancelar
            </Button>
          </Grid>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(FormComponent)
