import React, {Component, Fragment} from 'react'
import ChildLifeCycle from './childLifeCycle'
class parentLifeCycle extends Component {
	constructor(){
		console.log('Parent constructor')
		super()
		this.state = {
			name: "Shashikumara M"
		}
	}

	componentWillMount = () => {
		console.log('Parent Component will get mount')
	}

	componentDidMount = () => {
		console.log('Parent Component did mount')
	}

	componentWillReceiveProps = () => {
		console.log('Parent Component will recive props')
	}

	shouldComponentUpdate = () => {
		console.log('Parent should update')
		return true;
	}
	changeTheState = () => {
  		this.setState({
  			name: "Aishwarya"
  		})
  	}
  	componentWillUpdate = () => {
		console.log('parent will get update')
	}

	componentDidUpdate = () => {
		console.log('parent did update')
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log('parent prev props', prevProps)
		console.log('parent prev state', prevState)
		console.log('parent did update')
	}

	componentWillUnmount = () => {
		console.log('parent will unmount')
	}

	unmountChild = () => {
		this.setState({name: "robert"})
	}

	render(){
		console.log('Parent Render mount')
		if(this.state.name === 'robert'){
			return (<div/>)
		}
		return (
			<div>
				<h1>{this.state.name}</h1>
				<ChildLifeCycle />
				<button onClick={this.changeTheState.bind(this)}>Change State</button>
				<button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
			</div>
		)
	}
}

export default parentLifeCycle;