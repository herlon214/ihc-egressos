// Libs
import React, { Component } from 'react'
import { roles } from '../../reducers/users'

// Components
import Typography from '@material-ui/core/Typography'
import Button from '../../components/Button'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import GenericDialog from '../../components/GenericDialog'
import RoleMatch from '../../components/RoleMatch'
import TestimonialForm from './form'

class Testimonials extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dialogs: { create: false },
      testimonials: [
        {
          name: 'Herlon Aguiar',
          photoUrl: 'https://www.impacthubrecife.com/blog/wp-content/uploads/2018/03/steve-jobs.png',
          content: 'Gostei bastante de estudar aqui, recomendo à todos.'
        },
        {
          name: 'Jeovano Coutinho',
          photoUrl: 'http://img.timeinc.net/time/daily/2012/1211/poy_benbernanke.jpg',
          content: 'Há muito a melhorar ainda.'
        },
        {
          name: 'Andrei Mattos',
          photoUrl: 'https://specials-images.forbesimg.com/imageserve/5a942b7b31358e79a28a452b/416x416.jpg?background=000000&cropX1=285&cropX2=3498&cropY1=146&cropY2=3360',
          content: 'O lugar é incrível, conheci muita gente legal.'
        }
      ]
    }
  }

  changeDialog (dialog, value) {
    this.setState({ dialogs: { [dialog]: value } })
  }

  render () {
    return (
      <div>
        <Typography variant='display3'>
          Depoimentos
          <RoleMatch roles={[roles.Egress]}>
            <Button color='primary' title='Novo depoimento' onClick={() => this.changeDialog('create', true)} />
          </RoleMatch>
        </Typography>
        <br />
        <br />
        <Grid container>
          { this.state.testimonials.map(item => {
            return (<Grid item sm={3}>
              <Card style={{maxWidth: 345}}>
                <CardMedia
                  style={{paddingTop: '56.25%', height: 0}}
                  image={item.photoUrl}
                  title='Foto do egresso'
                />
                <CardContent>
                  <Typography gutterBottom variant='headline' component='h2'>
                    { item.name }
                  </Typography>
                  <Typography component='p'>
                    { item.content }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>)
          })}
        </Grid>
        <br />
        <GenericDialog
          title='Novo depoimento'
          open={this.state.dialogs.create}
          buttons={<Button color='primary' title='Enviar' onClick={() => this.changeDialog('create', false)} />}
          handleClose={() => this.changeDialog('create', false)}>
          <TestimonialForm />
        </GenericDialog>
      </div>
    )
  }
}
export default Testimonials
