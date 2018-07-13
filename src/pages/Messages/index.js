// Libs
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { actions } from '../../reducers/messages'

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


class Messages extends Component {
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
      message: answer
    }
    this.props.newMessage(payload)
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <Typography variant='display3'>Mensagens <Button color='primary' title='Nova mensagem' /></Typography>
        <br />
        
        <br />
        <Typography>Clique no nome listado abaixo para visualizar a mensagem.</Typography>
        <br />
        { this.props.messages.map((message) => {
          return <ExpansionPanel key={message.get('id')} onChange={() => this.onOpenMessage(message)}>
            <ExpansionPanelSummary>
              <Typography variant='title'>
                {message.getIn(['from', 'name'])}
                { message.get('read') === true ? '' : <Chip className={this.props.classes.chip} label='Não lida' />}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container>
                <Grid item sm={12}>
                  <Typography>{message.get('message')}</Typography>
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
          </ExpansionPanel>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages.get('list')
      .filter(message => {
        return message.get('to') === state.users.get('actual').get('id') || message.get('to') === state.users.get('actual').get('id')
      })
      .map(message => {
        message = message.set('from', state.users.get('list').find(user => user.get('id') === message.get('from')))
        message = message.set('to', state.users.get('list').find(user => user.get('id') === message.get('to')))

        return message
      })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setRead: (id) => dispatch({ type: actions.MESSAGES_SET_READ, payload: id }),
    newMessage: (payload) => dispatch({ type: actions.MESSAGES_INSERT, payload }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Messages))
