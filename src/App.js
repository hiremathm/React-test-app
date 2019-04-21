import React, { Component } from 'react';
import Users from './user/users';
import TwoWayBinding from './user/twowaybinding'
import Parent from './communication/parent'
import Employees from './listAndKeys/employee'
import './App.css';

class App extends Component {
  state = {
  	title: "Communication",
  	users: [
  		{name: "Shiva", age: "25"},
  		{name: "Kumar", age: "23"},
  		{name: "Aishu", age: "24"}
  	]
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
  			<br/><br/>
  			<div>
  				{
  					this.state.users.map((user) => {
  							return(<Employees name={user.name} age={user.age}/>)
  						}
  					)
  				}
  			</div>
  		</div>
    )
  }
}
export default App;