// Libs
import React, { Component } from 'react'

// Components
import Default from './components/Default'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar logged={false}/>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
