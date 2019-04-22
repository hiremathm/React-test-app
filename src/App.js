import React, { Component } from 'react';
import Users from './user/users';
import TwoWayBinding from './user/twowaybinding'
import Parent from './communication/parent'
import Employees from './listAndKeys/employee'
import UniqueId from 'react-html-id'
import Student from './fragments/student'
import ParentLifeCycle from './lifeCycle/parentLifeCycle'
import './App.css';

class App extends Component {
  constructor(){
  	super()
  	UniqueId.enableUniqueIds(this);
  	this.state = {
  	title: "Communication",
  	users: [
  		{id: this.nextUniqueId, name: "Shiva", age: "25"},
  		{id: this.nextUniqueId, name: "Kumar", age: "23"},
  		{id: this.nextUniqueId, name: "Aishu", age: "24"}
  	]
  }
  }
  changeButtonName = (newTitle) => {
  	this.setState({
  		title: newTitle
  	})
  }

  deleteEachUser = (index, e) => {
  	const dupUsers = Object.assign([], this.state.users)
  	dupUsers.splice(index, 1)
  	this.setState({
  		users: dupUsers
  	})
  }

  changeUserName = (id, e) => {
  	const index = this.state.users.findIndex((user) => {
  		return(user.id === id)
  	})

  	const user = Object.assign({}, this.state.users[index])

  	user.name = e.target.value;

	const dupUsers = Object.assign([], this.state.users)
  	dupUsers[index] = user
  	this.setState({
  		users: dupUsers
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
  					this.state.users.map((user, index) => {
  							return (
  								<Employees key={index}
  									name={user.name} 
  									deleteUser={this.deleteEachUser.bind(this, index)}
  									changeName={this.changeUserName.bind(this, user.id)}
  									age={user.age}
  								/>
  							)
  						}
  					)
  				}
  			</div>
  			<br/>
  			<Student name={" Studnent name: Shivakumara M"}/>
  			<br/>
  			<ParentLifeCycle />
  			<br/>
  		</div>
    )
  }
}
export default App;