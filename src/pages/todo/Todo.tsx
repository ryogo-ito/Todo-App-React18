import React from 'react';
import { LayoutTemplate } from '../../ui/components/layouts/LayoutTemplate';
import { TextField } from '../../ui/components/elements/TextField';
import { EditList } from '../../ui/components/modules/EditList';
import { TodoList } from '../../ui/types';

interface Props {
  todoList: TodoList[];
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
}

export const Todo = ({
  todoList,
  onEditButtonClick,
  onDeleteButtonClick,
}: Props) => {
  return (
    <>
      <LayoutTemplate
        headerChildren={<h1>ヘッダー</h1>}
        contentChildren={
          <>
            <TextField />
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
