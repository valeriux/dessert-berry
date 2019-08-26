import React from 'react'

const DessertCard = (props) => {
  console.log(props)
  return (
    <div className="card">

      <div className="column is-one-half">
        <div className="content">
          <div className="content-overlay"></div>
          <img className="content-image" src={props.image} alt={'props.name'}/>
          <div className="content-details fadeIn-bottom">
            <p id="white-title1" className="white-title">{props.name}</p>
            <span></span>
            <p className="content-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DessertCard
