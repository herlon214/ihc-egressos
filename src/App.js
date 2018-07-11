// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar
          user={ this.props.user } 
        />
        <Main auth={ this.props.user != null} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.get('actual')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}


export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(App)) 
