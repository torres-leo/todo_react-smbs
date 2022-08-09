import React from 'react';
import Task from './Task';

const TaskList = ({ todoTasks, setTaskElement, deleteTask, completedTask }) => {
	return (
		<div>
			<h3>Task List</h3>
			{todoTasks && todoTasks.length ? (
				<ul>
					{todoTasks.map((taskLI) => (
						<Task
							key={taskLI.id}
							taskLI={taskLI}
							setTaskElement={setTaskElement}
							deleteTask={deleteTask}
							completedTask={completedTask}
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
