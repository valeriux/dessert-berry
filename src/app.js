import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './style.scss'
import 'bulma'
import Home from './components/Home'
import NavBar from './components/Navbar'
import DessertIndex from './components/DessertIndex'
import DessertShow from './components/DessertShow'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>

        <NavBar />
        <div>
          <Switch>
            <Route path="/desserts/:id" component={DessertShow}/>
            <Route path="/desserts" component={DessertIndex} />
            <Route exact path='/' component={Home} />

          </Switch>
        </div>
      </Router>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'))
