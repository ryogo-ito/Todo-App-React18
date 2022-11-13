import { Todo } from './ui/components/layouts/Todo';
import 'antd/dist/antd.css';
import { MOCK_TODO_LIST } from './mock/todolist';

export const App = () => {
  return (
    <div>
      <Todo todoList={MOCK_TODO_LIST} />
    </div>
  );
};
