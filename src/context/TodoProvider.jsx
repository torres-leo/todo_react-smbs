import React, { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todoTasks, setTodoTasks] = useState([]);
	const [taskElement, setTaskElement] = useState({});

	const generateId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const addTask = (task) => {
		task.id = generateId();
		setTodoTasks([...todoTasks, task]);
	};

	const deleteTask = (id) => {
		const updateTasks = todoTasks.filter((task) => task.id !== id);
		setTodoTasks(updateTasks);
	};

	return (
		<TodoContext.Provider value={{ todoTasks, setTodoTasks, addTask, deleteTask, taskElement, setTaskElement }}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoProvider };
export default TodoContext;
