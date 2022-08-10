import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

function App() {
	return (
		<TodoProvider>
			<h2>Todo App | React.js</h2>
			<TodoForm />
			<TaskList />
		</TodoProvider>
	);
}

export default App;
