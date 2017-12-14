import React, { Component } from 'react';
import './css/App.css';
import Main from './react/main/main.js';
import NavbarCustom from './react/navbar/navbar.js';
import AddSightingModal from './react/modal/modal.js';
import { connect } from 'react-redux';
import { getInitialState } from './redux/actions/getinitialstate.js';



class App extends Component {

  componentDidMount() {
    this.props.getInitialState()

  }

  render() {
    return (
      <div >
        <NavbarCustom/>
        <Main/>
        <AddSightingModal/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

      getInitialState: () => {
        dispatch(getInitialState())
      },

  };
};

export default connect(null,mapDispatchToProps)(App);
