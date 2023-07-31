import { Mock, describe, expect, it, vi } from 'vitest';
import TodoStore from '../TodoStore';
import Todo from '../../models/Todo';
import { getAll } from '../../api/todos';

vi.mock('../../api/todos');

describe('TodoStore', () => {
  it('should create store with default properties', () => {
    (getAll as Mock).mockResolvedValue({ data: [] });
    const store = new TodoStore();

    expect(getAll).toHaveBeenCalled();
    expect(store.todos).toHaveLength(0);
  });

  it('should compute valid stats', () => {
    (getAll as Mock).mockResolvedValue({ data: [] });
    const store = new TodoStore();
    store.todos.push(new Todo('Finished', true), new Todo('Not finished', false), new Todo('Second finished', true));

    expect(store.stats.all).toBe(3);
    expect(store.stats.done).toBe(2);
    expect(store.stats.remaining).toBe(1);
  });

  it('should add todo', () => {
    (getAll as Mock).mockResolvedValue({ data: [] });
    const store = new TodoStore();
    store.addTodo('Test');

    expect(store.todos).toHaveLength(1);
  });
});
