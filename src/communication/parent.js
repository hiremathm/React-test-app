import React, {Component} from 'react'
import Child from './child'
const parent = (props) => {
	return (
		<div>
			<Child doWhatever={props.doWhateverYouWant} title={props.title}/>
			<Child doWhatever={props.donotdoWhateverYouWant} title={props.title}/>
		</div>
	)
}

export default parent;