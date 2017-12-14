import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

export default class DescriptionInput extends Component {
  render() {

    return(
      <form>
        <FormGroup controlId="formControlsTextarea"
          validationState={this.props.valid===false ? "error":null}>
          <ControlLabel>Description.</ControlLabel>
          <FormControl style={{resize:"none",overflow:'hidden'}}
            type="text"  rows="3" componentClass="textarea"
            placeholder="Some description of your sighting. Max 150 characters."
            maxLength="150"
          onChange={(e)=> this.props.setDescription(e.target.value)}/>
        </FormGroup>
      </form>
    )
  }
}
