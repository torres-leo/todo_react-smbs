// import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<h2>Todo App | React.js</h2>
				<TodoForm />
				<TaskList />
			</PersistGate>
		</Provider>
	);
}

export default App;
