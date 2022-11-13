import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

interface Props {
  headerChildren: ReactNode;
  contentChildren: ReactNode;
}

// TODO layoutでの共通コンポーネントを作成する
export const LayoutTemplate = ({ headerChildren, contentChildren }: Props) => {
  return (
    <Layout>
      <Header>{headerChildren}</Header>
      <Content>{contentChildren}</Content>
      <Footer>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};
