// Libs
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { actions } from '../../reducers/messages'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold
  }
})

const Messages = ({ classes, messages, setRead }) => {
  return (
    <div className={classes.root}>
      { messages.map((message) => {
        return <ExpansionPanel key={message.get('id')} onClick={() => setRead(message.get('id'))}>
          <ExpansionPanelSummary expandIcon={<i className='material-icons'>expand_more_icon</i>}>
            <Typography className={classes.heading}>{message.getIn(['from', 'name'])}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{message.get('message')}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      })}
    </div>
  )
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
    setRead: (id) => dispatch({ type: actions.MESSAGES_SET_READ, payload: id })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Messages))
