import React from 'react';
import { List } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { ListBase } from '../../types';

interface Props {
  list: ListBase[];
  headerText: string;
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
}

export const EditList = ({
  list,
  headerText,
  onEditButtonClick,
  onDeleteButtonClick,
}: Props) => {
  return (
    <List
      header={<b>{headerText}</b>}
      bordered
      dataSource={list}
      renderItem={(item) => (
        <>
          <List.Item key={item.id}>
            <List.Item.Meta title={item.title} description={item.description} />
            <List.Item onClick={onEditButtonClick}>
              <EditFilled />
            </List.Item>
            <List.Item onClick={onDeleteButtonClick}>
              <DeleteFilled />
            </List.Item>
          </List.Item>
        </>
      )}
    ></List>
  );
};
