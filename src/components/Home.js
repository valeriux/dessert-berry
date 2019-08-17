import React from 'react'
import Loading from './Loading'

class Home extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <section>
        <Loading />
        <div className="container">

        </div>
      </section>
    )
  }

}

export default Home
