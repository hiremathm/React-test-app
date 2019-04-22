import React, {Component, Fragment} from 'react'

class childLifeCycle extends Component {
	constructor(){
		console.log('Child constructor')
		super()
		this.state = {
			name: "Shivakumara M"
		}
	}

	componentWillMount = () => {
		console.log('Child Component will get mount')
	}

	componentDidMount = () => {
		console.log('Child Component did mount')
	}

	componentWillReceiveProps = () => {
		console.log('Child Component will recive props')
	}

	shouldComponentUpdate = () => {
		console.log('child should update')
		return true;
	}

	componentWillUpdate = () => {
		console.log('child will get update')
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log('child prev props', prevProps)
		console.log('child prev state', prevState)
		console.log('child did update')
	}

	componentWillUnmount = () => {
		console.log('child will unmount')
	}
	
	render(){
		console.log('Child Render mount')
		return (
			<h1>{this.state.name}</h1>
			
		)
	}
}

export default childLifeCycle;