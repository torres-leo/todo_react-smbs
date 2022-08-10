import React from 'react';
import Task from './Task';
import useTodo from '../hooks/useTodo';

// const TaskList = ({ todoTasks, setTaskElement, deleteTask, completedTask }) => {
const TaskList = () => {
	const { todoTasks } = useTodo();

	const renderList = () => {
		return todoTasks && todoTasks.length ? (
			<ul>
				{todoTasks.map((taskLI) => (
					<Task
						key={taskLI.id}
						taskLI={taskLI}
						// setTaskElement={setTaskElement}
						// deleteTask={deleteTask}
						// completedTask={completedTask}
					/>
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
