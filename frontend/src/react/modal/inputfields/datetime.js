import React, { Component } from 'react';
import { Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

export default class DateTimeInput extends Component {
  componentDidMount() {
    var dateTime = new Date().toISOString()
    this.props.setDateTime(dateTime)
  }


  render() {
    var dateTime;


    if (this.props.dateTime !== "") {
      var date = new Date(this.props.dateTime)
      var year = date.getFullYear()
      var month = ((date.getMonth() + 1)<10?'0':'') + (date.getMonth() + 1)
      var day = (date.getDate()<10?'0':'') + date.getDate()
      var hours = (date.getHours()<10?'0':'') + date.getHours()
      var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes()
      dateTime = year+"-"+month+"-"+day+"T"+hours+":"+minutes

    } else {
      dateTime = ""
    }


    return(
      <Form inline>
      <FormGroup controlId="formDate" validationState={this.props.valid?null:"error"}>
        <ControlLabel>Seen.</ControlLabel><br/>
        <FormControl  type="datetime-local" min="2000-01-01T00:00" value={dateTime}
        onChange={(e)=> this.props.setDateTime(e.target.value)}/>

      </FormGroup>

    </Form>
    )

  }


}
