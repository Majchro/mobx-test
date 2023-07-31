import { observer } from 'mobx-react-lite';
import TodoStore from '../stores/TodoStore';

type Props = {
  store: TodoStore;
};

const TodoList = observer(({ store }: Props) => {
  const { isLoading, todos } = store;

  if (isLoading) return null;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ color: todo.isFinished ? 'green' : 'red' }}>{todo.text}</span>
          <button onClick={todo.toggleFinished}>Toggle</button>
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
