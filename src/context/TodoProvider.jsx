import React, { createContext } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export { TodoProvider };
export default TodoContext;
