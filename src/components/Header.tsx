import TodoStore from '../stores/TodoStore';
import Counter from './Counter';

type Props = {
  store: TodoStore;
};

const Header = ({ store }: Props) => (
  <div>
    <h1>TodoList</h1>
    <Counter store={store} />
  </div>
);

export default Header;
