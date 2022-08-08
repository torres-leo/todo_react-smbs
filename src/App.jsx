import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getLocalStorage = () => {
			const tasksLS = JSON.parse(localStorage.getItem('tasks')) ?? [];
			setTasks(tasksLS);
		};
		getLocalStorage();
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<h2>Todo App | React.js</h2>
			<TodoForm tasks={tasks} setTasks={setTasks} />
			<TaskList tasks={tasks} />
		</>
	);
}

export default App;
