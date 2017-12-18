import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SightingBlock from './sightingblock.js';


export default class ListView extends Component {

  render() {
    var blocks = []
    this.props.sightings.map(sighting =>
    blocks.push(<SightingBlock key={sighting.id} sighting={sighting}/>))

    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
      <ReactCSSTransitionGroup
        transitionName="sightingBlocks"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={true}
        transitionEnterTimeout={1000}>

              {blocks}

      </ReactCSSTransitionGroup>
    </div>
  </div>



    )
  }


}
