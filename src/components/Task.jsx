import React from 'react';
import Button from './Button';

const Task = ({ task }) => {
	const { task: element, id } = task;

	console.log(element, id);
	return (
		<>
			<li>{element}</li>
		</>
	);
};

export default Task;
