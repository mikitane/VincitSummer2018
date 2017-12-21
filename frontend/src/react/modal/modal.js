import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actions/togglemodal.js';
import { Modal, Button,Collapse } from 'react-bootstrap';
import SelectSpeciesInput from './inputfields/selectspecies.js';
import DescriptionInput from './inputfields/description.js';
import CountInput from './inputfields/count.js';
import DateTimeInput from './inputfields/datetime.js';
import { addSighting } from '../../redux/actions/addsighting.js'

/* Handles creating a new sighting. Controls user inputs with own methods and
  state. Renders a button for adding a new sighting only if all inputs are
  valid. Uses Redux actions to post the sighting to the server.  */


class AddSightingModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSpecies:"",
      count:1,
      validCount:true,
      description:"",
      validDescription:null,
      dateTime:"",
      validDatetime:false,
    };
    this.setSelectedSpecies = this.setSelectedSpecies.bind(this)
    this.setCount = this.setCount.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setDateTime = this.setDateTime.bind(this)

    this.onToggle = this.onToggle.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

  }

  setSelectedSpecies(species) {
    this.setState({
      selectedSpecies:species
    })
  }

  setCount(count) {
    var input = parseFloat(count)
    if (input % 1 === 0 && input > 0 && input < 1001 ) {
        this.setState({
          count:count,
          validCount:true
        })
    } else {
      this.setState({
        count:count,
        validCount:false
      })
    }
  }

  setDescription(text) {
    if (text === "") {
      this.setState({
        description:text,
        validDescription:false
      })
    } else {
      this.setState({
        description:text,
        validDescription:true
      })
    }
  }

  setDateTime(dateTime) {

    if (dateTime != "") {
      var date = new Date(dateTime)
      var now = new Date()
      if (date > now || date.getFullYear() < 2000) {
        this.setState({
          dateTime:date.toISOString(),
          validDatetime:false
        })
      } else {
      this.setState({
        dateTime:date.toISOString(),
        validDatetime:true
      })
    }
    } else {
      this.setState({
        dateTime:"",
        validDatetime:false
      })
    }

  }

  onToggle() {
    this.setState({
      selectedSpecies:"",
      count:1,
      validCount:true,
      description:"",
      validDescription:null,
      dateTime:"",
      validDatetime:false,
    })
    this.props.toggleModal()
  }

  handleAdd() {
    var payload = {
      species:this.state.selectedSpecies,
      description:this.state.description,
      dateTime:this.state.dateTime,
      count:this.state.count,
      }
    this.props.addSighting(payload)
    this.setState({
      selectedSpecies:"",
      count:1,
      validCount:true,
      description:"",
      validDescription:null,
      dateTime:"",
      validDatetime:false,

    })
    this.props.toggleModal()
  }


  render() {

    return(

      <Modal show={this.props.modalOpen} onHide={this.onToggle}>
         <Modal.Header closeButton>
           <Modal.Title>Add a new sighting!</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <SelectSpeciesInput
            setSelectedSpecies={this.setSelectedSpecies}
            species={this.props.species} />

          <Collapse in={this.state.selectedSpecies !== ""}>
            <div>
              <DescriptionInput
                setDescription={this.setDescription}
                valid={this.state.validDescription}/>
              <CountInput
                setCount={this.setCount}
                valid={this.state.validCount}/>
              <DateTimeInput
                setDateTime={this.setDateTime}
                setDate={this.setDate}
                setTime={this.setTime}
                dateTime={this.state.dateTime}
                valid={this.state.validDatetime}/>
            </div>
          </Collapse>

         </Modal.Body>
          <Modal.Footer>
         <Collapse in={this.state.selectedSpecies !== "" && this.state.validCount &&
                      this.state.validDescription && this.state.validDatetime}>
            <div>
             <Button style={{float:'right'}} bsStyle="success"
               onClick={this.handleAdd}>Add!</Button>
           </div>
          </Collapse>
          </Modal.Footer>
       </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen:state.modalOpen,
    species:state.species
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

      toggleModal: () => {
        dispatch(toggleModal())
      },
      addSighting: (payload) => {
        dispatch(addSighting(payload))
      }


  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddSightingModal);
