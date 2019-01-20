import React from 'react'

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>Hi, my name is {props.name} and I am {props.age}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changeNameHandler}/>
		</div>
	)
};

export default person;