import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl} from 'react-bootstrap';


export default class SelectSpeciesInput extends Component {

  render() {
    var options = []
    this.props.species.map(singleSpecies =>
      options.push(<option key={singleSpecies.name} value={singleSpecies.name}>{singleSpecies.name}</option>))

    return(
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select the species.</ControlLabel>
          <FormControl componentClass="select" placeholder="select"
            onChange={(e) => this.props.setSelectedSpecies(e.target.value)}
            defaultValue="">
            <option disabled value = "">Select the species:</option>
            {options}
          </FormControl>
        </FormGroup>
      </form>

    )
  }



}
