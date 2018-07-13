// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/messages'

// Components
import Typography from '@material-ui/core/Typography'
import Button from '../../components/Button'
import MessagesList from '../../components/MessagesList'
import GenericDialog from '../../components/GenericDialog'

class Messages extends Component {
  constructor (props) {
    super(props)

    this.state = {
      writingAnswer: {},
      dialogs: { messageSentOpen: false, newMessageOpen: false }
    }
  }

  sendMessage (payload) {
    this.setState({ dialogs: { messageSentOpen: true } })
    this.props.newMessage(payload)
  }

  render () {
    return (
      <div>
        <Typography variant='display3'>Mensagens <Button color='primary' title='Nova mensagem' /></Typography>
        <br />
        
        <br />
        <Typography>Clique no nome listado abaixo para visualizar a mensagem.</Typography>
        <br />
        <MessagesList
          setRead={this.props.setRead}
          sendMessage={(payload) => this.sendMessage(payload)}
          messages={this.props.messages} />
        <GenericDialog
          title='Mensagem enviada!'
          open={this.state.dialogs.messageSentOpen}
          handleClose={() => this.setState({ dialogs: { messageSentOpen: false } })}>
          Assim que a mensagem for respondida aparecerá na lista.
        </GenericDialog>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages.get('list')
      .filter(message => {
        return message.get('to') === state.users.get('actual').get('id')
      })
      .map(message => {
        message = message.set('from', state.users.get('list').find(user => user.get('id') === message.get('from')))
        message = message.set('to', state.users.get('list').find(user => user.get('id') === message.get('to')))

        return message
      })
      .reverse()
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
)(Messages)
