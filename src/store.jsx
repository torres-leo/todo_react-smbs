import redux from 'redux';

const todoReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			break;
		case 'EDIT_TODO':
			break;
		case 'DELETE_TODO':
			break;
		default:
			return state;
	}
};

const store = redux.createStore(todoReducer);

export { store };
