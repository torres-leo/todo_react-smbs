import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

function App() {
	const [todoTasks, setTodoTasks] = useState(JSON.parse(localStorage.getItem('todoTasks')) ?? []);
	const [taskElement, setTaskElement] = useState({});

	// useEffect(() => {
	// 	const getLocalStorage = () => {
	// 		const tasksLS = JSON.parse(localStorage.getItem('todoTasks')) ?? [];
	// 		setTodoTasks(tasksLS);
	// 	};
	// 	getLocalStorage();
	// }, []);

	useEffect(() => {
		localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
	}, [todoTasks]);

	const deleteTask = (id) => {
		const updateTasks = todoTasks.filter((task) => task.id !== id);
		setTodoTasks(updateTasks);
	};

	return (
		<>
			<h2>Todo App | React.js</h2>
			<TodoForm
				todoTasks={todoTasks}
				setTodoTasks={setTodoTasks}
				taskElement={taskElement}
				setTaskElement={setTaskElement}
			/>
			<TaskList todoTasks={todoTasks} setTaskElement={setTaskElement} deleteTask={deleteTask} />
		</>
	);
}

export default App;
