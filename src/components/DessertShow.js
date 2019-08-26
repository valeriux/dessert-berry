import React from 'react'
import axios from 'axios'


class DessertShow extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      data: null
    }
  }

  componentDidMount() {
    axios.get(`api/desserts/${this.props.match.params.id}`)
      .then(res => this.setState({data: res.data}))
  }


  render() {
    console.log(this.state.data, 'AQUIIIII')
    if(!this.state.data) return null
    return(
      <section className="section">
        <div className="container">

          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{this.state.data.name}</h1>
            </div>
          </div>
          <hr/>
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.data.image} alt={this.state.data.name}/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DessertShow
