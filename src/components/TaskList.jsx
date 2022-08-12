import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task';

const TaskList = () => {
	const todos = useSelector((state) => state.todos.todos);

	const renderList = () => {
		if (!todos.length) return <p>Your tasks will be show here </p>;
		return todos?.map((task) => <Task key={task.id} data={task} />);
	};

	return (
		<div>
			<h3>Task List</h3>
			<ul>{renderList()}</ul>
		</div>
	);
};

export default TaskList;
