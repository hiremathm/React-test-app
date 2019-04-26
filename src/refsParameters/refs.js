import React, {Component} from 'react'

class RefsParameter extends Component{
	submitForm = () => {
		console.log(`Name : ${this.firstName.value}${this.lastName.value} and age : ${this.age.value}`)
	}

	onKeyUp = (target, e) => {
		if(e.keyCode === 13){
			switch( target ) 
			{
				case "firstName":
					this.lastName.focus();
					break;
				case "lastName":
					this.age.focus();
					break;
				case "age":
					this.submit.focus();
					break;
				default:
					this.firstName.focus();
			}	
		}
	}

	render(){
		return(
			<div>
				<h3>Invitation Form</h3>
				<label> First Name :
					<input type="text" ref={(input) => {this.firstName = input}} onKeyUp={this.onKeyUp.bind(this, "firstName")} />
				</label>
				<br/><br/>
				<label> Last Name :
					<input type="text" ref={(input) => {this.lastName = input}} onKeyUp={this.onKeyUp.bind(this, "lastName")} />
				</label>
				<br/><br/>
				<label> Age :
					<input type="text" ref={(input) => {this.age = input}} onKeyUp={this.onKeyUp.bind(this, "age")} />
				</label>
				<br/><br/>
				<label> 
					<input type="submit" ref={(input) => {this.submit = input}} value="submit" onClick={this.submitForm.bind(this, "submit")}/>
				</label>
			</div>
		)
	}
}

export default RefsParameter;