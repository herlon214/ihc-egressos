// Libs
import React, { Component } from 'react'

// Components
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import Button from '../../components/Button'
import CardContent from '@material-ui/core/CardContent'

class Jobs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      jobs: [
        {
          company: 'StarTech Dourados',
          description: 'Job como dev júnior PHP. 8hrs semanais, CLT.'
        },
        {
          company: 'DigitalNet',
          description: 'Gerente de redes, PJ. R$ 8.000'
        }

      ]
    }
  }

  render () {
    return (
      <div>
        <Typography variant='display3'>
          Oportunidades de empregos
        </Typography>
        <br />
        <br />
        <Grid container>
          { this.state.jobs.map(item => {
            return (<Grid item sm={3}>
              <Card style={{maxWidth: 345}}>
                <CardContent>
                  <Typography gutterBottom variant='headline' component='h2'>
                    { item.company }
                  </Typography>
                  <Typography component='p'>
                    { item.description }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color='secondary' title='Mais detalhes' />
                </CardActions>
              </Card>
            </Grid>)
          })}
        </Grid>
        <br />
      </div>
    )
  }
}
export default Jobs
