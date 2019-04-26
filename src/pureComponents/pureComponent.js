import React, {Component} from 'react'

const UserScore = (props) =>{
	return(
		<p>The Score is : {props.value}</p>
	)
}

class PureComponent extends Component{
	state = {
		score: 1
	}

	componentDidMount = () => {
		setInterval(() => {
			this.setState(() => {
				return {score: 10}
			});
		}, 2500)
	}

	render(){
		return(
			<div>
				<UserScore value={this.state.score}/>
			</div>
		)
	}
}

export default PureComponent;
