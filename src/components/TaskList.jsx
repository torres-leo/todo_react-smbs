import React, { useContext, useEffect } from 'react';
import Task from './Task';
import TodoContext from '../context/TodoProvider';

const TaskList = () => {
	const { todoTasks } = useContext(TodoContext);

	const renderList = () => {
		if (!todoTasks.length) return <p> Your tasks will be show here </p>;
		return todoTasks?.map((taskLI) => <Task key={taskLI.id} taskLI={taskLI} />);
	};

	return (
		<div>
			<h3>Task List</h3>
			<ul>{renderList()}</ul>
		</div>
	);
};

export default TaskList;
