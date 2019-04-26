import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'
class CustomRouter extends Component {
	render(){
		return(
			<Router>
				<div>
					<NavLink to="/" exact activeStyle={{color: "green"}}>HOME</NavLink><br/>		
					<NavLink to="/about/" exact activeStyle={{color: "blue"}}>ABOUT</NavLink><br/>
					<NavLink to="/user/shiva" exact activeStyle={{color: "yellow"}}>USERS</NavLink>
					<Route path="/" exact strict render = { () =>
						{
							return(<h1>First Route</h1>);
						}
					}/>

					<Route path="/about/" exact strict render = { () =>
						{
							return(<h1>about</h1>);
						}
					}/>

					<Route path="/user/:username" exact strict component={User}/>
					
				</div>
			</Router>
		)
	}
}

const User = ({match}) => {
	return(
		<h1>Welcome {match.params.username}</h1>
	)
}

export default CustomRouter;
