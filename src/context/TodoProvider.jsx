import React, { createContext, useState, useEffect } from 'react';
import { generateId, setLocalStorage, getLocalStorage } from '../utils/functions';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todoTasks, setTodoTasks] = useState([]);
	const [taskElement, setTaskElement] = useState({});

	useEffect(() => {
		const items = getLocalStorage('todoTasks');
		setTodoTasks(items);
	}, []);

	const addTask = (task) => {
		if (taskElement.id) {
			// EDIT TASK
			task.id = taskElement.id;

			let editingTask = [...todoTasks];
			const index = editingTask.findIndex((taskState) => taskState.id === taskElement.id);
			editingTask.splice(index, 1, task);
			setTodoTasks(editingTask);
			setLocalStorage('todoTasks', editingTask);
			setTaskElement({});
		} else {
			// NEW TASK
			task.id = generateId();
			const newTask = [...todoTasks, task];
			setTodoTasks(newTask);
			setLocalStorage('todoTasks', newTask);
		}
	};

	const deleteTask = (id) => {
		const updateTasks = todoTasks.filter((task) => task.id !== id);
		setTodoTasks(updateTasks);
		setLocalStorage('todoTasks', updateTasks);
	};

	const completedTask = (task) => {
		let checkedTasks = [...todoTasks];
		const index = checkedTasks.findIndex((taskState) => taskState.id === task.id);
		const item = checkedTasks[index];
		checkedTasks.splice(index, 1, { ...item, completed: !item.completed });

		setTodoTasks(checkedTasks);
		setLocalStorage('todoTasks', checkedTasks);
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
				completedTask,
			}}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoProvider };
export default TodoContext;
