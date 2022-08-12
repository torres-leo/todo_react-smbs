import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input';
import Button from './Button';
import TodoContext from '../context/TodoProvider';
import { useCallback } from 'react';
import { generateId } from '../utils/functions';

const TodoForm = () => {
	// const { addTask, taskElement } = useContext(TodoContext);
	const [task, setTask] = useState('');
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const todos = useSelector((state) => state);
	console.log(todos);

	// useEffect(() => {
	// 	if (Object.keys(taskElement).length) {
	// 		setTask(taskElement.task);
	// 	}
	// }, [taskElement]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!task) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 4000);
			return;
		}

		const inputValue = { task, completed: false, id: generateId() };

		// addTask(inputValue);
		// dispatch({ type: ADD_TODO, payload: inputValue });
		console.log(inputValue);

		setTask('');
	};

	const handleChange = useCallback(
		(e) => {
			setTask(e.target.value);
		},
		[task]
	);

	return (
		<form onSubmit={handleSubmit}>
			<Input type='text' placeholder='Insert your task' onChange={handleChange} value={task} />
			{/* <Button type='submit'>{taskElement.id ? 'Update Task' : 'Add Task'}</Button> */}
			<Button type='submit'>Add Task</Button>
			{error && <p>Insert a task, please</p>}
		</form>
	);
};

export default TodoForm;
