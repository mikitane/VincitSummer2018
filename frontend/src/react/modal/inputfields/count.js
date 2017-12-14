import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

export default class CountInput extends Component {



  render() {
    return(
      <form>
        <FormGroup ref="count" controlId="formCount" style={{width:'15%'}}
          validationState={this.props.valid ? null:"error"}>
          <ControlLabel>Count.</ControlLabel>
          <FormControl  type="number" min="0" max="1000" step="1" defaultValue={1}
          onChange={(e)=>this.props.setCount(e.target.value)}/>

          {this.props.valid===false &&
            <HelpBlock>Invalid count.</HelpBlock>}

        </FormGroup>
      </form>

    )

  }

}
