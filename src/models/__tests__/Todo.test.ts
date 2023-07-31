import { describe, expect, it } from 'vitest';
import Todo from '../Todo';

describe('Todo', () => {
  it('should create model with default properties', () => {
    const todo = new Todo('Test todo');

    expect(todo.id).toBeTruthy();
    expect(todo.text).toBe('Test todo');
    expect(todo.isFinished).toBe(false);
  });

  it('should create finished model', () => {
    const todo = new Todo('Test todo', true);

    expect(todo.isFinished).toBe(true);
  });

  it('should toggle isFinished property', () => {
    const todo = new Todo('Test todo');
    todo.toggleFinished();

    expect(todo.isFinished).toBe(true);
  });
});
