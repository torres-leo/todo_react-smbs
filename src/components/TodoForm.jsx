import React, { useState } from 'react';
import Button from './Button';

const TodoForm = ({ tasks, setTasks }) => {
	const [task, setTask] = useState('');

	const addId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!task) {
			console.log('No puedes dejar vacio');
			return;
		}

		const inputTask = { task };
		inputTask.id = addId();

		setTasks([...tasks, inputTask]);
		setTask('');
	};

	const handleAdd = () => {
		console.log('add');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Insert your task' onChange={(e) => setTask(e.target.value)} value={task} />
				<Button type='submit'>Add Task</Button>
			</form>
		</div>
	);
};

export default TodoForm;
