import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './style.scss'
import 'bulma'
import Home from './components/Home'


class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>

        <div>
          <Switch>

            <Route exact path='/' component={Home} />

          </Switch>
        </div>
      </Router>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'))
