import React, { Component } from 'react';
import gadwall from '../../../img/gadwall.jpg'
import mallard from '../../../img/mallard.png'
import canvasback from '../../../img/canvasback.jpg'
import redhead from '../../../img/redhead.jpg'
import lesserScaup from '../../../img/lesser scaup.jpg'


export default class SightingBlock extends Component {

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

      <div className="sightingBlock">
        <div className="row">
          <div className="col-sm-2">
            <img className="sightingBlockImage" alt="" src={images[species]}  />
          </div>
          <div className="col-sm-10">
            <div className="sightingBlockInfo">
              <div className="sightingBlockInfoRow">
                <h4>Species:</h4><p>{species}</p>
                <div className="sightingBlockCount">
                  <h4 >Count:</h4><p>{this.props.sighting.count}</p>
                </div>
              </div>


              <div  style={{marginBottom:'5px'}}>
                <h4>Description:</h4>
              </div>

                <p>{this.props.sighting.description}</p><br/>
                <div className="sightingBlockDate">

                  <h4>Seen:</h4><p>{day+"."+month+"."+year+" at "+hours+":"+minutes}</p>
                </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
