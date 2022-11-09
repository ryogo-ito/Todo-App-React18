import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import { TodoListBase } from '../../types';

interface Props {
  todoList: TodoListBase[];
  header: string;
}

export const TodoList = ({ todoList, header }: Props) => {
  return (
    <List
      header={<b>{header}</b>}
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
