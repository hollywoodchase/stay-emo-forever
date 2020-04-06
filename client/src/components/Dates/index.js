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
import Iframe from 'react-iframe';
 
class Dates extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="cal-div">
        {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23a95418&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
        <Iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23a95418&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;title=Mo%20Without%20the%20&#39;E&#39;"
        width="1400vh"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        border="0"
        frameborder="0"
        scrolling="no" />
      </div>
    );
  }
}

export default Dates;