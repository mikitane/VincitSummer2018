import React, { Component } from 'react';
import gadwall from '../../../img/gadwall.jpg'
import mallard from '../../../img/mallard.png'
import canvasback from '../../../img/canvasback.jpg'
import redhead from '../../../img/redhead.jpg'
import lesserScaup from '../../../img/lesser scaup.jpg'


export default class SightingCard extends Component {

  render() {
    const images = {
      Gadwall:gadwall,
      Mallard:mallard,
      Canvasback:canvasback,
      Redhead:redhead,
      'Lesser scaup':lesserScaup
  }
    var string = this.props.sighting.species
    const species = string.charAt(0).toUpperCase() + string.slice(1);
    var date = new Date(this.props.sighting.dateTime)

    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    var hours = (date.getHours()<10?'0':'') + date.getHours()
    var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes()


    return(
      <div className="col-md-4 col-lg-3 ">
        <div className="well sightingCard">
          <img className="sightingCardImage" alt="" src={images[species]}  />
          <div className="sightingCardInfo">
            <div className="sightingCardInfoRow">
              <h4>Species:</h4><p>{species}</p>
            </div>
            <div className="sightingCardInfoRow">
              <h4>Count:</h4><p>{this.props.sighting.count}</p>
            </div>
            <div className="sightingCardInfoRow">

              <h4>Seen:</h4><p>{day+"."+month+"."+year+" at "+hours+":"+minutes}</p>
            </div>
            <div  style={{marginBottom:'5px'}}>
              <h4>Description:</h4>
            </div>

              <p>{this.props.sighting.description}</p>

          </div>
        </div>
      </div>
    )
  }



}
