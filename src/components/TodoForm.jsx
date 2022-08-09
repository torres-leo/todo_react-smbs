import React, { useState } from 'react';
import { useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const TodoForm = ({ todoTasks, setTodoTasks, taskElement, setTaskElement }) => {
	const [task, setTask] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(taskElement).length > 0) {
			setTask(taskElement.task);
		}
	}, [taskElement]);

	const generateId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

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

		if (taskElement.id) {
			// EDIT TASK
			inputValue.id = taskElement.id;

			let editingTask = [...todoTasks];
			const index = editingTask.findIndex((taskState) => taskState.id === taskElement.id);
			editingTask.splice(index, 1, inputValue);
			setTodoTasks(editingTask);
			setTaskElement({});
		} else {
			// NEW TASK
			inputValue.id = generateId();
			setTodoTasks([...todoTasks, inputValue]);
		}

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
