import React, {Component} from 'react'

const employee = (props) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>
							Name
						</th>
						<th>
							Age
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.name}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default employee;