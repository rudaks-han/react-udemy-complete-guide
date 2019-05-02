import React from 'react';
import './Person.css';

const person = (props) => {
	return (
		<div class="Person">
			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
			<p>{props.children}</p>
			<input onChange={props.changed} value={props.name}/>
		</div>

	)
};

export default person;