import 'antd/dist/antd.css';
import { MOCK_TODO_LIST } from './mock/todolist';
import { EditList } from './ui/components/modules/EditList';

export const App = () => {
  return (
    <div>
      <EditList
        list={MOCK_TODO_LIST}
        headerText={'todo'}
        onEditButtonClick={() => alert('編集')}
        onDeleteButtonClick={() => alert('削除')}
      />
    </div>
  );
};
