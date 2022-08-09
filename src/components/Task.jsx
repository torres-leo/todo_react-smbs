import React from 'react';
import Button from './Button';

const Task = ({ taskElement, setTaskElement, deleteTask }) => {
	const { task, id, completed } = taskElement;

	const handleDelete = () => {
		const respuesta = confirm('Do you want to delete this task?');
		if (respuesta) {
			deleteTask(id);
		}
	};

	// console.log(element, id);
	return (
		<>
			<li>
				{task}
				<Button type='button' onClick={() => setTaskElement(taskElement)}>
					Edite
				</Button>
				<Button type='button' onClick={handleDelete}>
					Delete
				</Button>
			</li>
		</>
	);
};

export default Task;
