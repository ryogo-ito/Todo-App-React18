import React from 'react';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { TextField } from '../elements/TextField';
import { TodoList } from '../modules/TodoList';
import { TodoListBase } from '../../types';

interface Props {
  todoList: TodoListBase[];
}

// TODO layoutでの共通コンポーネントを作成する
export const Todo = ({ todoList }: Props) => {
  return (
    <Layout>
      <Header>
        <h1>ヘッダー</h1>
      </Header>
      <Content>
        <TextField />
        <TodoList todoList={todoList} />
      </Content>
      <Footer>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};
