import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import './style.scss'
import 'bulma'
import Home from './components/Home'
import DessertIndex from './components/DessertIndex'
import Footer from './components/Footer'
import Map from './components/Map'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <main>
          < Home />
          <DessertIndex />
          <Map />
          <Footer />
        </main>
      </Router>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'))
