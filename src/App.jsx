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
				<h2 className='title'>Todo App | React.js</h2>
				<div className='mt-10 w-1/2 mx-auto'>
					<TodoForm />
					<TaskList />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
