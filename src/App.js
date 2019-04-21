import React, { Component } from 'react';
import Users from './user/users';
import TwoWayBinding from './user/twowaybinding'
import Parent from './communication/parent'
import './App.css';

class App extends Component {
  state = {
  	title: "Communication"
  }
  changeButtonName = (newTitle) => {
  	this.setState({
  		title: newTitle
  	})
  }

  render(){
    return (
    	<div>	
    		<Users title="All Users List"/>
  			<TwoWayBinding />	
  			<Parent doWhateverYouWant={this.changeButtonName.bind(this, "Parent Done, Thank You!")}
  			donotdoWhateverYouWant={this.changeButtonName.bind(this, "Child Not Done, Thank You!")}
  			title={this.state.title}/>
  		</div>
    )
  }
}
export default App;