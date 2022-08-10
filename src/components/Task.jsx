import React, { useEffect, useContext } from 'react';
import Button from './Button';
import Input from './Input';
import TodoContext from '../context/TodoProvider';

const Task = ({ data }) => {
	const { deleteTask, setTaskElement, completedTask } = useContext(TodoContext);
	const { task, id, completed } = data;

	const handleDelete = () => {
		const answer = confirm('Do you want to delete this task?');
		if (answer) {
			deleteTask(id);
		}
	};

	const handleCompleted = () => completedTask(data);
	const handleEditing = () => setTaskElement(data);

	return (
		<li>
			<Input type='checkbox' onChange={handleCompleted} defaultChecked={completed} />
			{task}
			<Button type='button' onClick={handleEditing}>
				Edit
			</Button>
			<Button type='button' onClick={handleDelete}>
				Delete
			</Button>
		</li>
	);
};

export default Task;
