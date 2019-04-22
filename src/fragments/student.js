import React, {Component, Fragment} from 'react'

const Student = (props) => {
	//Fragments are used to avoid the extra div tags, which are used for wrapping the data from two adjusent tags.
	return (
		<Fragment>
			{
				props.name
			}
		</Fragment>
	)
}

export default Student;