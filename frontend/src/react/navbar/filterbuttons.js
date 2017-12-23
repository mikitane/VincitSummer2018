import React, { Component } from 'react';
import { ToggleButtonGroup,
        ToggleButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions/changefilter.js';



class FilterButtons extends Component {

  onChange(filter) {
    this.props.changeFilter(filter)
  }

  render() {


    return(
      <ToggleButtonGroup type="radio" name="options" defaultValue={"down"}
        onChange={this.onChange.bind(this)}>
        
        <ToggleButton value={"down"} className="navbar-btn">
          <span className="glyphicon glyphicon-triangle-bottom" ></span>
        </ToggleButton>

        <ToggleButton value={"up"} className="navbar-btn">
          <span className="glyphicon glyphicon-triangle-top"> </span>
        </ToggleButton>

      </ToggleButtonGroup>
    )

  }

}

const mapDispatchToProps = (dispatch) => {
  return {

      changeFilter: (filter) => {
        dispatch(changeFilter(filter))
      }
  };
};

export default connect(null,mapDispatchToProps)(FilterButtons);
