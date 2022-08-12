import React from 'react';
import Button from './Button';
import Input from './Input';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, completedTask } from '../redux/reducers/todoSlice';

const Task = ({ data }) => {
	const { task, id, completed } = data;
	const dispatch = useDispatch();

	const handleDelete = () => {
		const answer = confirm('Do you want to delete this task?');
		if (answer) {
			dispatch(deleteTask(id));
		}
	};

	const handleCompleted = () => {
		dispatch(completedTask(data));
	};
	const handleEditing = () => {
		dispatch(editTask(data));
	};

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
