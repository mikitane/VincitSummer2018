import React, { Component } from 'react';
import { Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

export default class DateTimeInput extends Component {
  componentDidMount() {
    var dateTime = new Date()
    this.props.setDateTime(dateTime)
  }


  render() {
    var date;
    var time;

    if (this.props.dateTime !== "") {
      var dateTime = new Date(this.props.dateTime)
      var day = (dateTime.getDate()<10?'0':'')+ dateTime.getDate()
      var month = ((dateTime.getMonth() + 1 )< 10 ? '0':'')+ (dateTime.getMonth() + 1)
      var year = dateTime.getFullYear()
      var hours = (dateTime.getHours()<10?'0':'') + dateTime.getHours()
      var minutes = (dateTime.getMinutes()<10?'0':'') + dateTime.getMinutes()
      date = year+"-"+month+"-"+day
      time = hours+":"+minutes

    } else {
      date = ""
      time = ""
    }


    return(
      <Form inline>
      <FormGroup controlId="formDate" validationState={this.props.valid?null:"error"}>
        <ControlLabel>Seen.</ControlLabel><br/>
        <FormControl  type="date" value={date}
        onChange={(e)=> this.props.setDate(e.target.value)}/>
        <FormControl type="time" value={time}
        onChange={(e)=> this.props.setTime(e.target.value)}/>
      </FormGroup>

    </Form>
    )

  }


}
