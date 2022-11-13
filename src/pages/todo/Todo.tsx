import React from 'react';
import { LayoutTemplate } from '../../ui/components/layouts/LayoutTemplate';
import { TextField } from '../../ui/components/elements/TextField';
import { EditList } from '../../ui/components/modules/EditList';
import { TodoList } from '../../ui/types';
import { Button, Space } from 'antd';

interface Props {
  todoList: TodoList[];
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
  onAddButtonClick: () => void;
}

export const Todo = ({
  todoList,
  onEditButtonClick,
  onDeleteButtonClick,
  onAddButtonClick,
}: Props) => {
  return (
    <>
      <LayoutTemplate
        headerChildren={<h1>ヘッダー</h1>}
        contentChildren={
          <>
            <Space size="large" align="center">
              <TextField />
              <Button type="primary" shape="round" onClick={onAddButtonClick}>
                追加
              </Button>
            </Space>
            <EditList
              list={todoList}
              headerText={'TODO LIST'}
              onEditButtonClick={onEditButtonClick}
              onDeleteButtonClick={onDeleteButtonClick}
            />
          </>
        }
      />
    </>
  );
};
