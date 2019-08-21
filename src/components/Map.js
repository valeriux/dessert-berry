import React from 'react'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoidmFsZXJpbGl1eCIsImEiOiJjanppbWFjNDQwMHJkM21xbnhxd25zcmtkIn0.IfmkxNOo0RdcXNNxNzI46A'
})

class DessertMap extends React.Component {
  constructor() {
    super()

    this.state = {
      longitude: -0.005810,
      latitude: 51.542030,
      pin: {},
      pinClick: false,
      address: '2Montfichet Rd - E201EG'

    }
  }


  render() {
    return (
      <section className='Map' >
        <h3 className='title is-1'> Location </h3>
        <div className="columns is-multiline is-centered">

          <div className="column is-two-thirds">
            <Map
              className="mapbox"
              style='mapbox://styles/mapbox/streets-v11'
              center={[this.state.longitude, this.state.latitude]}
              zoom={[14]}
              containerStyle={{
                height: '60vh',
                width: '60vw'
              }}
            >


              <Marker className="marker"
                coordinates={[this.state.longitude, this.state.latitude]}
                anchor="bottom"
              >
                <img src={'./media/pin.png'}/>
              </Marker>



              <Popup className="popup"
                coordinates={[this.state.longitude, this.state.latitude]}
                offset={{
                  'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>

                <div>

                  <h3 className="poptitle">{this.state.address}</h3>
                </div>
              </Popup>

            </Map>
          </div>

        </div>
      </section>
    )
  }

}

export default DessertMap
