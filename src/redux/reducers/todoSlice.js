import { createSlice } from '@reduxjs/toolkit';
import { generateId } from '../../utils/functions';

const initialState = {
	todos: [],
	task: {},
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTask: (state, action) => {
			if (state.task?.id) {
				let editingTask = [...state.todos];
				const index = editingTask.findIndex((taskState) => taskState.id === state.task.id);
				editingTask.splice(index, 1, { ...state.task, task: action.payload });
				state.todos = [...editingTask];
				state.task = {};
			} else {
				const todoTask = { id: generateId(), completed: false, task: action.payload };
				state.todos = [...state.todos, todoTask];
			}
		},
		editTask: (state, action) => {
			state.task = action.payload;
		},
		deleteTask: (state, action) => {
			state.todos = state.todos.filter((task) => task.id !== action.payload);
		},
		completedTask: (state, action) => {
			let checkedTasks = [...state.todos];
			const index = checkedTasks.findIndex((taskState) => taskState.id === action.payload.id);
			const item = checkedTasks[index];
			checkedTasks.splice(index, 1, { ...item, completed: !item.completed });

			state.todos = [...checkedTasks];
		},
	},
});

export const { addTask, editTask, deleteTask, completedTask } = todoSlice.actions;
export default todoSlice.reducer;
