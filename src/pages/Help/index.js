// Libs
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

// Components
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

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

class Help extends Component {
  constructor (props) {
    super(props)

    this.state = {
      topics: [
        {
          name: 'Como enviar um depoimento?',
          description: 'Clique no menu "Depoimentos" e logo após clique no botão "Enviar depoimento".'
        },
        {
          name: 'Como enviar um depoimento?',
          description: 'Clique no menu "Depoimentos" e logo após clique no botão "Enviar depoimento".'
        },
        {
          name: 'Como enviar um depoimento?',
          description: 'Clique no menu "Depoimentos" e logo após clique no botão "Enviar depoimento".'
        },
      ]
    }
  }

  render () {
    return this.state.topics.map((topic, index) => {
      return (<ExpansionPanel key={index}>
        <ExpansionPanelSummary>
          <Typography variant='title'>{topic.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{topic.description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>)
    })
  }
}

export default withStyles(styles)(Help)
