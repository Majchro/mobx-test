import { describe, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import TodoForm from '../TodoForm';
import TodoStore from '../../stores/TodoStore';

vi.mock('../../stores/TodoStore');

describe('TodoForm', () => {
  it('should render form', () => {
    const store = new TodoStore();
    const { getByTestId } = render(<TodoForm store={store} />);

    expect(getByTestId('form-input')).toBeInTheDocument();
    expect(getByTestId('form-button')).toBeInTheDocument();
  });

  it('should call addTodo when form is submited', () => {
    const store = new TodoStore();
    const { getByTestId } = render(<TodoForm store={store} />);
    fireEvent.change(getByTestId('form-input'), { target: { value: 'Test value' } });
    fireEvent.click(getByTestId('form-button'));

    expect(store.addTodo).toBeCalledWith('Test value');
  });

  it('should clear input when form is submited', () => {
    const store = new TodoStore();
    const { getByTestId } = render(<TodoForm store={store} />);
    fireEvent.change(getByTestId('form-input'), { target: { value: 'Test value' } });
    fireEvent.click(getByTestId('form-button'));

    expect(getByTestId('form-input')).toHaveValue('');
  });
});
