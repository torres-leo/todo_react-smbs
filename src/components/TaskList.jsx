import React, { useEffect } from 'react';
import Task from './Task';
import useTodo from '../hooks/useTodo';

const TaskList = () => {
	const { todoTasks, getLocalStorage } = useTodo();

	useEffect(() => {
		getLocalStorage();
	}, []);

	const renderList = () => {
		return todoTasks && todoTasks.length ? (
			<ul>
				{todoTasks.map((taskLI) => (
					<Task key={taskLI.id} taskLI={taskLI} />
				))}
			</ul>
		) : (
			<p>Your tasks will be show here</p>
		);
	};

	return (
		<div>
			<h3>Task List</h3>
			{renderList()}
		</div>
	);
};

export default TaskList;
