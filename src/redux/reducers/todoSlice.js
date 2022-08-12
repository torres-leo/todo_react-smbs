import { createSlice } from '@reduxjs/toolkit';
import { generateId } from '../../utils/functions';

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTask: (state, action) => {
			const task = { id: generateId(), completed: false, task: action.payload };
		},
		// editTask: () => {},
		// deleteTask: () => {},
	},
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
