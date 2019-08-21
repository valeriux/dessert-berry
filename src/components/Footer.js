import React from 'react'

class Footer extends React.Component {
  render() {
    return(

      <section>
        <div className="columns black">

          <div className="column is-one-third">
            <h3 className='title is-3'> Address </h3>
            <p>2 Montfichet Rd</p>
            <p>London</p>
            <p>E20 1EG</p>
          </div>

          <div className="column is-one-third">
            <h3 className='title is-3'> Contact </h3>
            <p>customer_service@dessertberry.com</p>
            <p>020 7510 5400</p>
          </div>

          <div className="column is-one-third">
            <h3 className='title is-3'> Hours </h3>
            <p>Weekdays: 10:00 - 21:00</p>
            <p>Saturday: 11:00 - 21:00</p>
            <p>Sunday: 12:00 - 18:00</p>
          </div>
        </div>

      </section>
    )
  }
}

export default Footer
