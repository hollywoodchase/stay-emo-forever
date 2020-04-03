// import React from 'react';
// // import Calendar from 'react-bootstrap-calendar';
// import { ReactBootstrap, OverlayTrigger, Popover, Button }  from 'react-bootstrap';
 
// class Calendar extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
                
//             </React.Fragment>
//             );
//     }
// }

// export default Calendar;

import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import "../../style.css"

 
class Dates extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="cal-div">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Dates;