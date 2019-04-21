import React, {Component} from 'react';
import User from './user';
class Users extends Component {
	state = {
		users: [
			{name: "Shiva", age: "100", id:"1"},
			{name: "Aishu", age: "100", id:"2"},
			{name: "Rama", age: "100", id:"3"}
		],
		title: "All Users List",
	};

	makeYounger = () => {
		const allUser = this.state.users.map((user) => {	
			return user.age -= 10
		});

		this.setState({
			allUser
		});
	}

	makeElder = () => {
		const allUser = this.state.users.map((user) => {	
			return user.age += 10
		});

		this.setState({
			allUser
		});
	}

	render(){
		return (
			<div>
				<button onClick={this.makeYounger}>Make Younger</button>
				<button onClick={this.makeElder}>Make Elder</button>
				<br/>
				<h2>{this.state.title}</h2>
				{this.state.users.map(user => 
						<User key={user.id} age={user.age}>{user.name}</User>
					)
				}
			</div>
		)
	}
}

export default Users;
