import React from 'react';
import { List } from 'antd';
import { TodoListBase } from '../../types';

interface Props {
  todoList: TodoListBase[];
}

export const TodoList = ({ todoList }: Props) => {
  return (
    <List
      header={<b>TODO</b>}
      bordered
      dataSource={todoList}
      renderItem={(todo) => (
        <>
          <List.Item key={todo.id}>
            <List.Item.Meta title={todo.title} description={todo.description} />
          </List.Item>
        </>
      )}
    ></List>
  );
};
