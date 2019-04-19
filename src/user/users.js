import React, {Component} from 'react';
import User from './user';
class Users extends Component {
	render(){
		return (
			<div>
				<h2>{this.props.title}</h2>
				<User age="22">Shiva</User>
			</div>
		)
	}
}

export default Users;
