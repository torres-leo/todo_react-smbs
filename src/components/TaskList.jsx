import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
	return (
		<div>
			<h3>Task List</h3>
			<ul>
				{tasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
};

export default TaskList;
