import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input';
import Button from './Button';
import { useCallback } from 'react';
import { addTask } from '../redux/reducers/todoSlice';

const TodoForm = () => {
	const [task, setTask] = useState('');
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const todoTask = useSelector((state) => state.todos.task);

	useEffect(() => {
		if (todoTask && Object.keys(todoTask).length) {
			setTask(todoTask.task);
		}
	}, [todoTask]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!task) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 4000);
			return;
		}

		dispatch(addTask(task));

		setTask('');
	};

	const handleChange = useCallback(
		(e) => {
			setTask(e.target.value);
		},
		[task]
	);

	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<Input type='text' placeholder='Insert your task' onChange={handleChange} value={task} className='input-task' />
				<Button
					type='submit'
					className={`btn add ${Object.keys(todoTask).length && 'bg-yellow-300 hover:bg-yellow-400'}`}>
					{Object.keys(todoTask).length ? 'Update Task' : 'Add Task'}
				</Button>
			</form>
			{error && <p className='error'>Insert a task, please</p>}
		</>
	);
};

export default TodoForm;
