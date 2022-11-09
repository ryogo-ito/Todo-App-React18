import { TextField } from './ui/components/elements/TextField';
import { TodoList } from './ui/components/modules/TodoList';
import { MOCK_TODO_LIST } from './mock/todolist';

export const App = () => {
  return (
    <div>
      <TextField />
      <TodoList todoList={MOCK_TODO_LIST} header={'TODO'} />
    </div>
  );
};
