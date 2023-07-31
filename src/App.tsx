import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStore from './stores/TodoStore';

const store = new TodoStore();

const App = () => (
  <>
    <Header store={store} />
    <TodoList store={store} />
    <TodoForm store={store} />
  </>
);

export default App;
