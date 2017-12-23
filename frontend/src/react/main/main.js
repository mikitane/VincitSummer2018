import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardView from './cardview/cardview.js';
import ListView from './listview/listview.js';


// Controls which view is shown: CardView or ListView. Renders also a loader
// if app is fetching.

class Main extends Component {

  filterUp(a,b) {
    if (a.dateTime < b.dateTime)
      return -1;
    if (a.dateTime > b.dateTime)
      return 1;
    return 0;
  }

  filterDown(a,b) {
    if (a.dateTime > b.dateTime)
      return -1;
    if (a.dateTime < b.dateTime)
      return 1;
    return 0;
  }

  render() {

    var sightings = this.props.sightings;
    if (this.props.filter == "up") {
      sightings.sort(this.filterUp.bind(this))
    } else if (this.props.filter == "down") {
      sightings.sort(this.filterDown.bind(this))
    }

    return(
      <div style={{marginLeft:'20px',marginRight:'20px'}}>
        {this.props.fetching && <div className="loader"></div>}

        {this.props.view === "cards" && this.props.initialFetchingDone &&
        <CardView key={1} sightings={sightings}></CardView>}

        {this.props.view === "list" && this.props.initialFetchingDone &&
        <ListView key={2} sightings={sightings}></ListView>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    view:state.view,
    sightings:state.sightings,
    filter:state.filter,
    fetching:state.fetching,
    initialFetchingDone:state.initialFetchingDone
  }
}

export default connect(mapStateToProps,null)(Main);
