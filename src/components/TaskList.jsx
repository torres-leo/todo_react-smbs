import React from 'react';
import Task from './Task';

const TaskList = ({ todoTasks, setTaskElement, deleteTask }) => {
	return (
		<div>
			<h3>Task List</h3>
			{todoTasks && todoTasks.length ? (
				<ul>
					{todoTasks.map((taskElement) => (
						<Task
							key={taskElement.id}
							taskElement={taskElement}
							setTaskElement={setTaskElement}
							deleteTask={deleteTask}
						/>
					))}
				</ul>
			) : (
				<p>Your tasks will be show here</p>
			)}
		</div>
	);
};

export default TaskList;
