import React, { useState, useEffect, useContext } from 'react';
import Input from './Input';
import Button from './Button';
import TodoContext from '../context/TodoProvider';
import { useCallback } from 'react';

const TodoForm = () => {
	const { addTask, taskElement } = useContext(TodoContext);
	const [task, setTask] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(taskElement).length > 0) {
			console.log(taskElement);
			setTask(taskElement.task);
		}
	}, [taskElement]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!task) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 4000);
			return;
		}

		const inputValue = { task, completed: false };

		addTask(inputValue);

		setTask('');
	};

	const handleChange = useCallback(
		(e) => {
			setTask(e.target.value);
		},
		[task]
	);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input type='text' placeholder='Insert your task' onChange={handleChange} value={task} />
				<Button type='submit'>{taskElement.id ? 'Update Task' : 'Add Task'}</Button>
				{error && <p>Insert a task, please</p>}
			</form>
		</div>
	);
};

export default TodoForm;
