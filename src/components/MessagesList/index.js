// Libs
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

// Components
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Button from '../../components/Button'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    width: '100%',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  }
})

class MessagesList extends Component {
  
  constructor (props) {
    super(props)

    this.state = {
      writingAnswer: {}
    }
  }

  onOpenMessage (message) {
    this.props.setRead(message.get('id'))
  }

  answerMessage (message) {
    let answer = this.state[`answerFor${message.get('id')}`]
    const payload = {
      from: message.getIn(['to', 'id']),
      to: message.getIn(['from', 'id']),
      previousMessage: message.get('message'),
      message: answer
    }
    this.props.sendMessage(payload)
  }

  render () {
    return this.props.messages.map(message => {
      return (<ExpansionPanel key={message.get('id')} onChange={() => this.onOpenMessage(message)}>
      <ExpansionPanelSummary>
        <Typography variant='title'>
          {message.getIn(['from', 'name'])}
          {message.get('read') === true ? '' : <Chip className={this.props.classes.chip} label='Não lida' />}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item sm={12} style={{display: message.get('previousMessage') ? 'block' : 'none'}}>
            <Typography><strong>Você:</strong> {message.get('previousMessage')}</Typography>
            <br />
          </Grid>
          <Grid item sm={12}>
            <Typography><strong>{message.getIn(['from', 'name'])}:</strong> {message.get('message')}</Typography>
          </Grid>
          <Grid item sm={12}>
            <TextField
              label='Responda essa mensagem'
              multiline
              value={this.state[`answerFor${message.get('id')}`]}
              onChange={(e) => this.setState({ [`answerFor${message.get('id')}`]: e.target.value })}
              rows='4'
              placeholder='Digite sua resposta aqui...'
              className={this.props.classes.textField}
              margin='normal'
            />
          </Grid>
          <Grid item xs={12}>
            <Button color='secondary' title='Enviar' onClick={() => this.answerMessage(message)} />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>)
    })
  }
}

export default withStyles(styles)(MessagesList)