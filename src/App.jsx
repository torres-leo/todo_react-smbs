import { useState, useEffect } from 'react';
import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

function App() {
	const [todoTasks, setTodoTasks] = useState([]);
	const [taskElement, setTaskElement] = useState({});

	useEffect(() => {
		const getLocalStorage = () => {
			const tasksLS = JSON.parse(localStorage.getItem('todoTasks'));
			setTodoTasks(tasksLS);
		};
		getLocalStorage();
	}, []);

	useEffect(() => {
		if (!todoTasks.length) return;
		localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
	}, [todoTasks]);

	// const deleteTask = (id) => {
	// 	const updateTasks = todoTasks.filter((task) => task.id !== id);
	// 	setTodoTasks(updateTasks);
	// };

	// const completedTask = (id) => {
	// 	const taskChecked = todoTasks.map((task) => {
	// 		if (task.id === id) {
	// 			return { ...task, completed: !task.completed };
	// 		}
	// 		return task;
	// 	});
	// 	setTodoTasks(taskChecked);
	// };

	return (
		<TodoProvider>
			<h2>Todo App | React.js</h2>
			<TodoForm
			// todoTasks={todoTasks}
			// setTodoTasks={setTodoTasks}
			// taskElement={taskElement}
			// setTaskElement={setTaskElement}
			/>
			<TaskList
			// todoTasks={todoTasks}
			// setTaskElement={setTaskElement}
			// deleteTask={deleteTask}
			// completedTask={completedTask}
			/>
		</TodoProvider>
	);
}

export default App;
