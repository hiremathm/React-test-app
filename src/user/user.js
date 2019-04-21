import React from 'react'

const User = (props) => {
	if(props.children){
		return (
			<div>
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Age</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.children}</td>
							<td>{props.age}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)		
	}else{
		return (
			<div>Invalid Entry</div>	
		)
	}
}

export default User;