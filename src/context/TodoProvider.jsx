import React, { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todoTasks, setTodoTasks] = useState([]);
	const [taskElement, setTaskElement] = useState({});

	const setLocalStorage = () => {
		if (!todoTasks.length) return;
		localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
	};

	const getLocalStorage = () => {
		const tasksLS = JSON.parse(localStorage.getItem('todoTasks'));
		setTodoTasks(tasksLS);
	};

	const generateId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const addTask = (task) => {
		if (taskElement.id) {
			// EDIT TASK
			task.id = taskElement.id;

			let editingTask = [...todoTasks];
			const index = editingTask.findIndex((taskState) => taskState.id === taskElement.id);
			editingTask.splice(index, 1, task);
			setTodoTasks(editingTask);
			setTaskElement({});
		} else {
			// NEW TASK
			task.id = generateId();
			setTodoTasks([...todoTasks, task]);
		}
	};

	const deleteTask = (id) => {
		const updateTasks = todoTasks.filter((task) => task.id !== id);
		setTodoTasks(updateTasks);
	};

	// let checkedTask;
	const completedTask = (task) => {
		let checkedTasks = [...todoTasks];
		const index = checkedTasks.findIndex((taskState) => taskState.id === task.id);
		const item = checkedTasks[index];
		checkedTasks.splice(index, 1, { ...item, completed: !item.completed });

		setTodoTasks(checkedTasks);
	};

	return (
		<TodoContext.Provider
			value={{
				todoTasks,
				setTodoTasks,
				addTask,
				deleteTask,
				taskElement,
				setTaskElement,
				setLocalStorage,
				getLocalStorage,
				completedTask,
			}}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoProvider };
export default TodoContext;
