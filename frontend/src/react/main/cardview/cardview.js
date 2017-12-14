import React, { Component } from 'react';
import SightingCard from './sightingcard.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




export default class CardView extends Component {

  render() {

    var sightings = this.props.sightings.map((sighting)=>(
      <SightingCard key={sighting.id} sighting={sighting} />
        ))

    return (
      <div className="row" >
        <ReactCSSTransitionGroup
          transitionName="sightingCards"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionEnterTimeout={800}
          transitionLeave={true}
          transitionLeaveTimeout={1000}>
            {sightings}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
