import React, {Component} from 'react'

const employee = (props) => {
	return (
		<div>
			<table>
				<thead>
					
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.age}</td>
						<td><button onClick={props.deleteUser}>Delete User</button></td>
						<td><input type="text" onChange={props.changeName}/></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default employee;