import React, { Component } from 'react';
import { Navbar,ButtonToolbar, Button } from 'react-bootstrap';
import { toggleModal } from '../../redux/actions/togglemodal.js';
import { connect } from 'react-redux';
import FilterButtons from './filterbuttons.js';
import ViewButtons from './viewbuttons.js';
import Logo from '../../img/ducklogo.png'


class NavbarCustom extends Component {
  render() {
    return(
      <Navbar fluid inverse collapseOnSelect style={{backgroundColor:'black',borderColor:'black'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
              <img className="navbarLogo" alt="" src={Logo}/><p>Duck sightings</p></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

              <div style={{float:'right'}}>
              <ButtonToolbar >

                <FilterButtons></FilterButtons>
                <ViewButtons></ViewButtons>
                <Button bsStyle="success" className="navbar-btn"
                  onClick={this.props.toggleModal}>Add a new sighting!</Button>

              </ButtonToolbar>

            </div>

          </Navbar.Collapse>

        </Navbar>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {

      toggleModal: () => {
        dispatch(toggleModal())
      }
  };
};

export default connect(null,mapDispatchToProps)(NavbarCustom);
