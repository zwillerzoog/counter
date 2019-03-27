import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import './App.css';

const defaultCount = 0;



class App extends React.Component {

	constructor () {
  	super();
  	this.state = {
    	appTitle: '',
      count: defaultCount
    }
  }
  
  componentWillMount() {
    console.log('mounted')
  	this.setState({
    	appTitle: 'Lets Count!!'
    });
  }


  increment () {
    this.setState({count: this.state.count+1});
  } 
  
  reset () {
  	this.setState({
    	count: 0
    });
  }

  render() {
  	
    return (
    	<div>
        <div>Goals</div>
          <ol>
            <li>Get the title to show</li>
            <li>Get the 'Lots of Clicks!!' to show when count is greater than 5</li>
            <li>Make Buttons function appropriately</li>
          </ol>
        <h1>{this.state.appTitle}</h1>
        <div>
          <button onClick={() => this.increment()}>Increment Count</button>
          <button onClick={() => this.reset()}>Reset Count To Default</button>
        </div>
        <ClickCounter count={this.state.count}/>
      </div>
    );
  }
}


export default App;
