import React from 'react';
import Button from './Button';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
		<li className='task'>
			<div className='info'>
				<Input type='checkbox' onChange={handleCompleted} defaultChecked={completed} />
				<p className={`${completed && 'line-through'}`}>{task}</p>
			</div>

			<div className='container-buttons'>
				{completed ? <p className='completed'>Completed</p> : <p className='pending'>Pending</p>}
				<Button type='button' className='btn edit' onClick={handleEditing}>
					<FontAwesomeIcon icon={faPenToSquare} />
				</Button>
				<Button type='button' className='btn delete' onClick={handleDelete}>
					<FontAwesomeIcon icon={faTrashCan} />
				</Button>
			</div>
		</li>
	);
};

export default Task;
