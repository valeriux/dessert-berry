import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight" style={{backgroundImage: 'url(media/dessert-1.jpg)'}}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <hr className='top' />
            <h1 className="CanaryCoffeeTitle">Dessert Berry</h1>
            <hr className="bottom"/>
            <h1 className="IntroductionText">Welcome</h1>
          </div>
        </div>
        <a href="#menu">
          <div id="scroll-chevron" className="fade-in bounce">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </a>
      </section>


    )
  }
}

export default Home
