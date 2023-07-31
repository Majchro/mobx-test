import { observer } from 'mobx-react-lite';
import TodoStore from '../stores/TodoStore';
import { useState } from 'react';

type Props = {
  store: TodoStore;
};

const TodoForm = observer(({ store }: Props) => {
  const { addTodo } = store;

  const [text, setText] = useState('');

  const submit = () => {
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} data-testid="form-input" />
      <button onClick={submit} data-testid="form-button">
        Add
      </button>
    </div>
  );
});

export default TodoForm;
