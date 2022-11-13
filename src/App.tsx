import 'antd/dist/antd.css';
import { MOCK_LIST } from './mock/list';
import { EditList } from './ui/components/modules/EditList';

export const App = () => {
  return (
    <div>
      <EditList
        list={MOCK_LIST}
        headerText={'todo'}
        onEditButtonClick={() => alert('編集')}
        onDeleteButtonClick={() => alert('削除')}
      />
    </div>
  );
};
