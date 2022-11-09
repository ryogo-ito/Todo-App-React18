import React from 'react';
import { Input, InputProps } from 'antd';
import 'antd/dist/antd.css';

interface Props extends InputProps {}

export const TextField = ({ onChange, value }: Props) => {
  return (
    <>
      <Input onChange={onChange} value={value} />
    </>
  );
};
