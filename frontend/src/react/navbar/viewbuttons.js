import React, { Component } from 'react';
import { ToggleButtonGroup,
        ToggleButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeView } from '../../redux/actions/changeview.js';


class ViewButtons extends Component {

  onChange(view) {
    this.props.changeView(view)
  }

  render() {


    return(
      <ToggleButtonGroup type="radio" name="options" defaultValue={"cards"}
        onChange={this.onChange.bind(this)}>
        <ToggleButton value={"cards"} className="navbar-btn">
          <span className="glyphicon glyphicon-th"></span>
        </ToggleButton>
        <ToggleButton value={"list"} className="navbar-btn" active="true">
          <span className="glyphicon glyphicon-th-list"> </span>
        </ToggleButton>

      </ToggleButtonGroup>
    )

  }

}

const mapDispatchToProps = (dispatch) => {
  return {

      changeView: (view) => {
        dispatch(changeView(view))
      }
  };
};

export default connect(null,mapDispatchToProps)(ViewButtons);
