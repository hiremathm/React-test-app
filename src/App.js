import React, { Component } from 'react';
import Users from './user/users';
import './App.css';

function PrintName(){
	return (
		<div>
			<h1>My First React App</h1>
		</div>
	)
}
class App extends Component {
  render(){
    return (
    	<div>	
    		<center><Users title="All Users List"/></center>
  		</div>
    )
  }
}

export default App;
