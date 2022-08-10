import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import useTodo from '../hooks/useTodo';

const TodoForm = () => {
	const { todoTasks, addTask, taskElement, setLocalStorage } = useTodo();
	const [task, setTask] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		setLocalStorage();
	}, [todoTasks]);

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

	const handleChange = (e) => {
		setTask(e.target.value);
	};

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
