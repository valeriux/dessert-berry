import React from 'react'
import axios from 'axios'
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
      <section id='menu' className='Menu'>
        <h3 className='title is-1'>Our Desserts</h3>
        <div className="columns is-multiline">

          {this.state.data.map(dessert =>
            <div key={dessert.id} className="column is-one-third-desktop is-half-tablet">

              <DessertCard {...dessert} />

            </div>
          )}

        </div>
      </section>
    )
  }
}

export default DessertIndex
