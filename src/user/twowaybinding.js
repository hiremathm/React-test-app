import React, {Component} from 'react';

class TwoWayBinding extends Component {
	state = {
		name: "All are awesome Users",
	};

	changeName = (newName) => {
		this.setState({
			name: newName 
		});
	}

	changeNameUsingInput = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	render(){
		return (
			<div>
				<button onClick={() => this.changeName("Awesome User List")}>Change Name Using Anny Function</button>
				<button onClick={this.changeName.bind(this, "Awesome Users List only")}>Change Name Using Bind </button>
				<br/><br/>
				<input type="text" value={this.state.name} onChange={this.changeNameUsingInput}/>
				<br/>
				<h2>{this.state.name}</h2>
				
			</div>
		)
	}
}

export default TwoWayBinding;
