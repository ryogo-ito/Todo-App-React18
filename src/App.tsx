import 'antd/dist/antd.css';
import { MOCK_LIST } from './mock/list';
import { Todo } from './pages/todo/Todo';

export const App = () => {
  return (
    <div>
      <Todo
        todoList={MOCK_LIST}
        onEditButtonClick={() => {}}
        onDeleteButtonClick={() => {}}
      />
    </div>
  );
};
