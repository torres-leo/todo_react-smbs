// import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<h2>Todo App | React.js</h2>
			<TodoForm />
			<TaskList />
		</Provider>
	);
}

export default App;
