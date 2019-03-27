import React, { Component } from 'react';


class ClickCounter extends React.Component {
	constructor (props) {
  	super(props);
    this.state = {
      showMassiveClicks: props.count > 5,
      count: this.props.count
    }
  }
  
  render() {
    let spanToggle = {display: 'none'}
  	if (this.props.count > 5) {
      spanToggle = {display: 'block'}
       };
  	
    return (
    	<div>
        <div>Count: {this.props.count}</div>
      <span style={spanToggle}>Lots of clicks!!</span>
      </div>
    );
  }
}

export default ClickCounter;