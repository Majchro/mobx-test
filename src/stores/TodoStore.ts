import { makeAutoObservable } from 'mobx';
import Todo from '../models/Todo';
import { getAll } from '../api/todos';

class TodoStore {
  todos: Array<Todo> = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.loadTodos();

    this.addTodo = this.addTodo.bind(this);
  }

  get stats() {
    return this.todos.reduce(
      (acc, val) => {
        acc.all += 1;
        acc[val.isFinished ? 'done' : 'remaining'] += 1;
        return acc;
      },
      {
        all: 0,
        done: 0,
        remaining: 0,
      }
    );
  }

  loadTodos() {
    getAll()
      .then((res) => {
        this.todos = res.data.map((todo) => new Todo(todo.text, todo.is_finished));
      })
      .catch(() => console.error('Error while fetching todos'))
      .finally(() => (this.isLoading = false));
  }

  addTodo(text: string) {
    const todo = new Todo(text);
    this.todos.push(todo);
  }
}

export default TodoStore;
