import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DessertCard from './DessertCard'


class DessertIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('api/desserts')
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data.map(dessert =>
              <div key={dessert._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to ={`/desserts/${dessert._id}`}>
                  <DessertCard {...dessert} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default DessertIndex
