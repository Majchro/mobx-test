import { observer } from 'mobx-react-lite';
import TodoStore from '../stores/TodoStore';

type Props = {
  store: TodoStore;
};

const Counter = observer(({ store }: Props) => {
  const { stats } = store;

  return (
    <div>
      <div>
        <span>All: </span>
        <span>{stats.all}</span>
      </div>
      <div>
        <span>Done: </span>
        <span>{stats.done}</span>
      </div>
      <div>
        <span>Remaining: </span>
        <span>{stats.remaining}</span>
      </div>
    </div>
  );
});

export default Counter;
