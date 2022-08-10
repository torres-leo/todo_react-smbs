import React from 'react';
import Button from './Button';
import Input from './Input';
import useTodo from '../hooks/useTodo';

const Task = ({ taskLI }) => {
	const { deleteTask, setTaskElement, completedTask } = useTodo();
	const { task, id, completed } = taskLI;

	const handleDelete = () => {
		const answer = confirm('Do you want to delete this task?');
		if (answer) {
			deleteTask(id);
		}
	};

	return (
		<>
			<li>
				<Input type='checkbox' onChange={() => completedTask(taskLI)} defaultChecked={completed} />
				{task}
				<Button type='button' onClick={() => setTaskElement(taskLI)}>
					Edit
				</Button>
				<Button type='button' onClick={handleDelete}>
					Delete
				</Button>
			</li>
		</>
	);
};

export default Task;
